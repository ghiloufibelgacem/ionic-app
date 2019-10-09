// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Your web app's Firebase configuration
  firebaseConfig : {
                   apiKey: "AIzaSyAQsGTB1DHdAnHRmqfGOW5DyfVBtngilJc",
                   authDomain: "app-stage-8f2dc.firebaseapp.com",
                   databaseURL: "https://app-stage-8f2dc.firebaseio.com",
                   projectId: "app-stage-8f2dc",
                   storageBucket: "",
                   messagingSenderId: "918544938715",
                   appId: "1:918544938715:web:73ea4c3b99b9c5ba"},
    // onesignal app key
    ONESIGNAL_APP_ID :'471295b1-920f-4815-b3d1-3b9c3ae76d5f',
    // Firebase cloud messaging
    ANDROID_ID :'918544938715',
    // backend server to store client
    // 10.0.3.2 virtual machine
    // SERVER_URL :'http://10.0.3.2:8001/api/client/add',
    SERVER_URL :'http://localhost:5000/api/client/add',
    SERVER_URL_SET_LOCATION :'http://localhost:5000/api/client/location',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
