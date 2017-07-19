// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDBUvc6w45tFy8Aj3ZZb5Z4LDdfCWASw90",
    authDomain: "pv-comp.firebaseapp.com",
    databaseURL: "https://pv-comp.firebaseio.com",
    projectId: "pv-comp",
    storageBucket: "pv-comp.appspot.com",
    messagingSenderId: "326378625184"
  }
};
