// Firebase bağlantısı buraya gelecek (Kodular'dan bağımsız web sitesi için)
console.log("CASHCASH Web Sitesi Yüklendi.");

// Örnek: Fanus doluluk oranını güncelleme (Firebase'den çekilecek)
setTimeout(() => {
    const progress = document.querySelector('.progress');
    if(progress) {
        progress.style.width = '35%'; // Örnek veri
    }
}, 1000);

function secWinners() {
    alert("İlk 10 kişi seçildi ve ödeme listesine eklendi!");
}
