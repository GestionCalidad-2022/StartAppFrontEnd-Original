import fb from "firebase";

const config = {
  apiKey: "AIzaSyDCikfkwlg_z6rYjtd5kq0wRMWx2tVqd_Y",
  authDomain: "dev-front-startamericas.firebaseapp.com",
  projectId: "dev-front-startamericas",
  storageBucket: "dev-front-startamericas.appspot.com",
  messagingSenderId: "306336007020",
  appId: "1:306336007020:web:39613791a44b34ca80a949",
  measurementId: "G-RMBTG4Y43Z",
};
fb.initializeApp(config);

export default fb;