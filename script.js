// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBWIvsZeEpCDZ4gCA_4OWgJTHChjDMFOB0",
    authDomain: "demowebsite-f6e39.firebaseapp.com",
    databaseURL: "https://demowebsite-f6e39-default-rtdb.firebaseio.com/",
    projectId: "demowebsite-f6e39",
    storageBucket: "demowebsite-f6e39.firebasestorage.app",
    messagingSenderId: "788668288815",
    appId: "1:788668288815:web:6804f9438d59256d599bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('incidentForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    maSO: form.maSO.value,
    maDHGHTK: form.maDHGHTK.value,
    suCo: form.suCo.value,
    user: form.user.value,
    phiNhapDSD: parseInt(form.phiNhapDSD.value),
    thongTinThem: form.thongTinThem.value,
    thoiGian: form.thoiGian.value
  };

  try {
    await addDoc(collection(db, "incidentReports"), formData);
    messageDiv.textContent = "Gửi báo cáo thành công!";
    form.reset();
  } catch (error) {
    messageDiv.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
    console.error("Error adding document: ", error);
  }
});
