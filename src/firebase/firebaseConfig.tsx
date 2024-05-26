import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: 'AIzaSyCUQiV8Jz8Qttjzg9NJnQ_yq6-1a-v7_og',
  authDomain: 'car-rental-6c204.firebaseapp.com',
  projectId: 'car-rental-6c204',
  storageBucket: 'car-rental-6c204.appspot.com',
  messagingSenderId: '668840812143',
  appId: '1:668840812143:web:e6980c1da8e1fe8725379a',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
