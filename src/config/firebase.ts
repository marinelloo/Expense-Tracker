import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../config/config'

const app = initializeApp(firebaseConfig)

export const Providers = {
  google: new GoogleAuthProvider(),
}

export const auth = getAuth(app)
export default app
