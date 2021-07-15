import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCBfj5WuWvi6TRVNfrZ_OIWC0yn_eEAmQw',
  authDomain: 'chat-web-app-dfe36.firebaseapp.com',
  projectId: 'chat-web-app-dfe36',
  storageBucket: 'chat-web-app-dfe36.appspot.com',
  messagingSenderId: '218067202280',
  appId: '1:218067202280:web:4a41c4bdc684946041995d',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
