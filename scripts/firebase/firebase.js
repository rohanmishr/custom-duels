import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/analytics";
import "firebase/performance";
import "firebase/remote-config";
import "firebase/database";
import "firebase/messaging";
import "firebase/installations";

import { getAuth } from "./auth/auth_current_user";
import { deleteUser } from "./auth/auth_delete_user";
import { getUserProfile } from "./auth/auth_get_user_profile";
import { reauthenticateWithCredential } from "./auth/auth_reauth_with_credential";
import { setLanguageCode } from "./auth/auth_set_language_code";
import { createUserWithEmailAndPassword } from "./auth/auth_signup_password";
import { onAuthStateChanged } from "./auth/auth_state_listener";
import { updatePassword } from "./auth/auth_update_password";
import { updateEmail } from "./auth/auth_update_email";
import { updateProfile } from "./auth/auth_update_profile";

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();
const analytics = firebase.analytics();
const performance = firebase.performance();
const remoteConfig = firebase.remoteConfig();
const database = firebase.database();
const messaging = firebase.messaging();
const installations = firebase.installations();

export { 
    firebase,
    auth,
    db,
    storage,
    functions,
    analytics,
    performance,
    remoteConfig,
    database,
    messaging,
    installations,
    deleteUser,
    getUserProfile,
    reauthenticateWithCredential,
    setLanguageCode,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updatePassword,
    updateEmail,
    updateProfile
};

