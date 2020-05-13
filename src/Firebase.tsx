import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCTCgOnId0jZ2dKXYo9G708wBxQ3AMU2EQ",
  authDomain: "barbershop-9948a.firebaseapp.com",
  databaseURL: "https://barbershop-9948a.firebaseio.com",
  projectId: "barbershop-9948a",
  storageBucket: "barbershop-9948a.appspot.com",
  messagingSenderId: "64987752014",
  appId: "1:64987752014:web:9f7300a2552d093259051f"
}

firebase.initializeApp(config)

export async function loginUser(email: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return true
  } catch(error) {
    console.log(error)
    return false
  }
}