import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
    apiKey: "AIzaSyAWNO7w6izvo_QxF-yLNS9t41R9s5nTK84",
    authDomain: "dalili-jijel.firebaseapp.com",
    databaseURL: "https://dalili-jijel-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "dalili-jijel",
    storageBucket: "dalili-jijel.firebasestorage.app",
    messagingSenderId: "456094589466",
    appId: "1:456094589466:web:ae19e48570a18a99d6e7a3"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// دالة التسجيل المعدلة لتشمل الـ Role
async function registerUser(fullName, phone, municipality, password, role) {
    const userRef = ref(db, 'users/' + phone); 

    try {
        // 1. التأكد إذا كان الرقم مسجلاً من قبل
        const snapshot = await get(child(ref(db), `users/${phone}`));
        if (snapshot.exists()) {
            alert("هذا الرقم مسجل مسبقاً في دليلي جيجل!");
            return;
        }

        // 2. حفظ البيانات مع تحديد الدور (Role)
        await set(userRef, {
            fullName: fullName,
            phone: phone,
            municipality: municipality,
            password: password, 
            role: role, // هنا الفائدة: سيتم حفظ 'pro' أو 'user'
            createdAt: new Date().toISOString()
        });

        alert("تم التسجيل بنجاح يا وليد بلادي! وجهنا للدخول.");
        window.location.href = "index.html"; 

    } catch (error) {
        console.error(error);
        alert("حدث خطأ أثناء التسجيل، تأكد من إعدادات الـ Rules في Firebase.");
    }
}

// ربط الدالة بالنموذج (Form)
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const municipality = document.getElementById('municipality').value;
    const role = document.getElementById('userRole').value; // جلب القيمة من القائمة المنسدلة
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (pass !== confirmPass) {
        const errorMsg = document.getElementById('errorMsg');
        if(errorMsg) errorMsg.style.display = 'block';
        else alert("كلمات السر غير متطابقة!");
        return;
    }

    // إرسال البيانات للدالة مع الـ role
    registerUser(name, phone, municipality, pass, role);
});