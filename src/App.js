import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,

      shortItems: [],
      mediumItems: [],
      longItems: [],
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.getTopTracks = this.getTopTracks.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
        loading: true,
      });
      this.getCurrentlyPlaying(_token);
      this.getTopTracks(_token);
    }
  }

  getTopTracks(token) {
    // Make call using token
    $.ajax({
      url:
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log(data);
        this.setState({ shortItems: data.items, loading: false });
      },
    });

    $.ajax({
      url:
        "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log(data);
        this.setState({ mediumItems: data.items, loading: false });
      },
    });

    $.ajax({
      url:
        "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log(data);
        this.setState({ longItems: data.items, loading: false });
      },
    });
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          loading: false,
        });
      },
    });
  }

  render() {
    let spotifyData = this.state.loading ? (
      <div>Loading</div>
    ) : !this.state.token ? (
      <div>
        <div>
          <body>
            <a
              href="https://github.com/sshah98/spotifyisolation"
              style={{ textDecoration: "none", color: "#1ecd97" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to code!
            </a>
          </body>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      </div>
    ) : this.state.token && !this.state.loading ? (
      <div>
        <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.progress_ms}
        />
        <br />
        <h2>Top Isolation Songs</h2>
        {this.state.shortItems.map((item) => (
          <div key={item.id}>
            <li>
              {item.name} {" — "}
              {item.artists[0].name}
            </li>
          </div>
        ))}
        <br />
        <h2>Top Songs of {new Date().getFullYear()}</h2>
        {this.state.mediumItems.map((item) => (
          <div key={item.id}>
            <li>
              {item.name} {" — "}
              {item.artists[0].name}
            </li>
          </div>
        ))}
        <br />
        <h2>Top All Time Songs</h2>
        {this.state.longItems.map((item) => (
          <div key={item.id}>
            <li>
              {item.name} {" — "}
              {item.artists[0].name}
            </li>
          </div>
        ))}
      </div>
    ) : (
      <div>There's been an error</div>
    );

    return (
      <div className="App">
        <header className="App-header">{spotifyData}</header>
      </div>
    );
  }
}

export default App;
