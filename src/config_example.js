export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "clientId";
// export const redirectUri = "https://spotifyisolation.web.app/redirect"; // global

export const redirectUri = "http://localhost:3000/redirect"; // localhost
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
];
