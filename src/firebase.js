import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCDWzDeSgFcUDhRJOiDgFRYwlBxSCDLqPk',
  authDomain: '',
  databaseURL: 'flowers-282514.web.app',
  projectId: 'flowers-282514',
  storageBucket: '',
  messagingSenderId: '22199809439',
  appId: '1:22199809439:web:4b7ab16cd9c6b28a79b9aa'
}

firebase.default.initializeApp(firebaseConfig);

const db = firebase.default.firestore()
const auth = firebase.default.auth()

const userProfiles = db.collection('users')
const siteProducts = db.collection('products')

export {
  db, 
  auth, 
  userProfiles,
  siteProducts
}