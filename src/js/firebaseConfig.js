import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfigJSON from "../../firebaseConfig.json"

// firebase init goes here
const config = firebaseConfigJSON
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// date issue fix according to firebase
const settings = {
   //  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const albumsCollection = db.collection('albums')

export {
    db,
    albumsCollection,
}