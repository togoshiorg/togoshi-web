import firebase from 'firebase';
import firebaseConfig from './config';

const app = firebase.initializeApp(firebaseConfig);

const fbobj = {
    app,
    db: app.database(),
};

export default fbobj;
