# Spotify Isolation

Gets your top Spotify songs during Coronavirus, top songs of the year, and all time top songs!

The Spotify API is easy to use and can be added to any application.

## Details

This app DOES NOT store any information. It only uses the Spotify API to get your information, and Firebase to host. The Client ID for Spotify has been removed and you need to make your own application on Spotify to use this.

This code is public purely for those that want to verify that this application is safe and secure.

## Quickstart

### 1. Register an application with

Go to the [Dashboard](https://developer.spotify.com/dashboard) page at the Spotify Developer website, and click on ‘My New App.” Be sure to write down the Client ID from your application.

### 2. Clone example repository

```sh
git clone https://github.com/JoeKarlsson/react-spotify-player.git
cd react-spotify-player
```

### 3. Update React Spotify Player Config

Change src/config_example.js to src/config.js and paste your Spotify Client ID from step 1 in the clientId field.

### 4. Install dependencies & run locally

```sh
npm install
npm start # open http://localhost:3000 in your browser
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request :D
