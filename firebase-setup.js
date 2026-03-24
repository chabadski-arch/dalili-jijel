import { initializeApp } from "http://googleusercontent.com/www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "http://googleusercontent.com/www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "http://googleusercontent.com/www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// إعداداتك الخاصة
const firebaseConfig = {
  apiKey: "AIzaSyAWNO7w6izvo_QxF-yLNS9t41R9s5nTK84",
  authDomain: "dalili-jijel.firebaseapp.com",
  projectId: "dalili-jijel",
  storageBucket: "dalili-jijel.firebasestorage.app",
  messagingSenderId: "456094589466",
  appId: "1:456094589466:web:ae19e48570a18a99d6e7a3",
  measurementId: "G-2SW7YG6PVG"
};

// تهيئة المشروع
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// تصدير الأدوات لاستخدامها في الصفحات الأخرى
export { db, auth, collection, addDoc, getDocs, query, where, createUserWithEmailAndPassword, signInWithEmailAndPassword };