import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp1HeUVSC0OhSfRaTnAWAU0xq1JrEZbWM",
  authDomain: "blog-website-cd837.firebaseapp.com",
  projectId: "blog-website-cd837",
  storageBucket: "blog-website-cd837.appspot.com",
  messagingSenderId: "55168633309",
  appId: "1:55168633309:web:d4741ad726fb2923470e34"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);