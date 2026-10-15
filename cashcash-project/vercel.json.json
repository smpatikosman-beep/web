// Firebase modüllerini CDN üzerinden içe aktar (Vercel/Statik siteler için en uygun yöntem)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Sizin Firebase yapılandırmanız (Ekran görüntüsünden alınmıştır)
const firebaseConfig = {
  apiKey: "AIzaSyC22SGAPMvHMyIomWJL8s9ckzFCUGGxYFc",
  authDomain: "cashcash-70c4f.firebaseapp.com",
  projectId: "cashcash-70c4f",
  storageBucket: "cashcash-70c4f.firebasestorage.app",
  messagingSenderId: "558530465357",
  appId: "1:558530465357:web:79addaada6e233ad689604",
  measurementId: "G-0NHN7E7DFY"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("CASHCASH Web Sitesi Firebase'e başarıyla bağlandı!");

// --- 1. Cam Fanusun Doluluk Oranını Canlı Olarak Dinle ---
// Firebase'deki "config" koleksiyonundaki "system" dokümanını dinliyoruz
const unsub = onSnapshot(doc(db, "config", "system"), (doc) => {
    const data = doc.data();
    if (data) {
        // Fanusun doluluk oranını CSS'e yansıt
        if (data.dome_fill_percentage !== undefined) {
            const progressBar = document.querySelector('.progress');
            if (progressBar) {
                progressBar.style.width = data.dome_fill_percentage + '%';
                console.log("Fanus Doluluk Oranı: %" + data.dome_fill_percentage);
            }
        }
        
        // 30 Günlük Geri Sayım
        if (data.competition_end_date) {
            const endDate = data.competition_end_date.toDate();
            const now = new Date();
            const diff = endDate - now;
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                
                // Sayfada id="countdown" olan bir element varsa buraya yazdır
                const countdownEl = document.getElementById('countdown');
                if (countdownEl) {
                    countdownEl.innerText = `${days} Gün ${hours} Saat ${minutes} Dakika`;
                }
            } else {
                const countdownEl = document.getElementById('countdown');
                if (countdownEl) countdownEl.innerText = "Yarışma Sona Erdi!";
            }
        }
    } else {
        console.log("Firebase'de 'config/system' dokümanı bulunamadı. Lütfen veritabanında oluşturun.");
    }
});

// --- 2. Admin Paneli İçin Kazananları Listeleme (Sadece admin.html'de çalışır) ---
if (window.location.pathname.includes('admin.html')) {
    console.log("Admin paneli yüklendi. Kazananlar bekleniyor...");
    // Buraya ileride kazananları çekme kodunu ekleyeceğiz
}
