// Mengimpor data JSON dari file "data.json"
const data = require('./produk.json');


// Mengakses data JSON
const produk = data.produk;

// Menentukan ulasan terbaik
produk.detail.ulasanTerbaik = getUlasanTerbaik(produk.detail.komentar);

// Fungsi untuk mendapatkan ulasan terbaik
function getUlasanTerbaik(komentar) {
  let ulasanTerbaik = "";
  let maxRating = 0;

  komentar.forEach(item => {
    if (item.rating > maxRating) {
      maxRating = item.rating;
      ulasanTerbaik = item.komentar;
    }
  });

  return ulasanTerbaik;
}


// Mengakses array "komentar" di dalam data JSON
const komentarArray = data.produk.detail.komentar;

// Mengambil Komentar pada Object Komentar
const komentar = komentarArray.map(obj => obj.komentar);

// Reverse array "komentar"
const reversedKomentar = komentar.slice().reverse();

// Menggabungkan array "komentar" menjadi string dengan separator ","
const joinedKomentar = komentarArray.map(obj => obj.komentar).join(", ");

// Mengambil Data Nama
const namaKomentar = komentarArray.map(obj => obj.nama).join(", ");

// Menghapus elemen pada indeks 1 dari  "komentar"
const removedKomentar = komentar.splice(1, 1);

// Mengambil subset  "komentar"
const slicedKomentar = komentar.slice(0, 2);

// Menampilkan Proses 
console.log('Nama Produk:', produk.nama);
console.log('Deskripsi:', produk.deskripsi);
console.log('Stok:', produk.stok);
console.log('Harga:', produk.harga);
console.log('Image:', produk.image);
console.log("Ulasan Terbaik:", produk.detail.ulasanTerbaik);
console.log("Reversed Komentar: ",reversedKomentar);
console.log("Nama Komentar: ",namaKomentar);
console.log("Joinded Komentar: ",joinedKomentar);
console.log("Remove Komentar: ",removedKomentar);
console.log("Sliced Komentar: ",slicedKomentar);
