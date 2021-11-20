import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkSUV19o5MzMCosiDKRTrFpCFrkpG3Xzo",
  authDomain: "budjet-332708.firebaseapp.com",
  projectId: "budjet-332708",
  storageBucket: "budjet-332708.appspot.com",
  messagingSenderId: "275361507754",
  appId: "1:275361507754:web:00247ded9f334b80aea3d3",
  measurementId: "G-MBDCMZFLC7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
