import firebase from "firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCpmyZmlvAY89IQAve9oAwV9_q8d_gD6Vw",
    authDomain: "task-621bc.firebaseapp.com",
    projectId: "task-621bc",
    storageBucket: "task-621bc.appspot.com",
    messagingSenderId: "1055674950797",
    appId: "1:1055674950797:web:1f643cd47121e6546ceec4"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()

export default database
