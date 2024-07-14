// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider } from "firebase/auth"



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const ghProvider = new GithubAuthProvider();

export { auth, googleProvider,fbProvider,ghProvider, app as default };

