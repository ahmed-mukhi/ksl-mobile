import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA2exEstnMQP4lo4gJEYaSoMR_r2DN8u8c",
  authDomain: "ksl-app-d7a68.pp.com",
  projectId: "ksl-app-d7a68",
  storageBucket: "ksl-app-d7a68.appspot.com",
  messagingSenderId: "1091261069415",
  appId: "1:1091261069415:web:2e4f2147254c9f2d5d3cc2",
};

initializeApp(config);
const auth = getAuth();
const firestore = getFirestore();

import { Alert } from "react-native";

export async function registration(email, password, first_name, last_name) {
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCred) {
      const currentUser = auth.currentUser;
      await setDoc(doc(firestore, "users", currentUser.uid), {
        email: currentUser.email,
        first_name: first_name,
        last_name: last_name,
      });
    }
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
    console.log(err);
  }
}

export async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
    console.log(err);
  }
}

export async function loggingOut() {
  try {
    await signOut(auth);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
    console.log(err);
  }
}

export async function applicationForm(
  name,
  fatherName,
  CNIC,
  dob,
  members,
  income
) {
  try {
    const currentUser = auth.currentUser;
    await setDoc(doc(firestore, "registered_users", currentUser.uid), {
      name: name,
      father_name: fatherName,
      date_of_birth: dob,
      total_members: members,
      total_income: income,
      CNIC: CNIC,
    });
  } catch (error) {
    Alert.alert("There is something wrong!", err.message);
  }
}
