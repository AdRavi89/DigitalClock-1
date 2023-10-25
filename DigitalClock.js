let dateText = document.querySelector('.container .date'); // Memilih elemen dengan kelas 'date' dalam elemen dengan kelas 'container'
let timeText = document.querySelector('.container .time'); // Memilih elemen dengan kelas 'time' dalam elemen dengan kelas 'container'
const weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Daftar hari dalam seminggu
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // Daftar bulan

let AMpm = "AM"; // Inisialisasi variabel AM/PM

let getTime = () => {
      let d = new Date(); // Membuat objek Date untuk mendapatkan waktu saat ini
      let day = d.getDay(); // Mengambil hari dalam seminggu (0-6)
      let year = d.getFullYear(); // Mengambil tahun
      let date = d.getDate(); // Mengambil tanggal
      let month = d.getMonth(); // Mengambil bulan (0-11)
      let hours = d.getHours(); // Mengambil jam (0-23)
      let minutes = d.getMinutes(); // Mengambil menit
      let seconds = d.getSeconds(); // Mengambil detik

   if (hours > 12) {
      hours = hours - 12; // Mengonversi jam ke format 12 jam jika lebih dari 12
      AMpm = "PM"; // Mengganti AM menjadi PM
   }

   // Mengatasi masalah angka satu digit dengan menambahkan "0" di depannya
   if (hours < 10) {
      hours = "0" + hours;
   }

   if (minutes < 10) {
      minutes = "0" + minutes;
   }

   if (seconds < 10) {
      seconds = "0" + seconds;
   }

   // Menampilkan waktu dan tanggal dalam elemen HTML
   dateText.innerHTML = `${weeks[day]}, ${date} ${months[month]} ${year}`;
   timeText.innerHTML = `${hours} : ${minutes} : ${seconds} ${AMpm}`;
}
// Memanggil fungsi getTime setiap 1000 milidetik (1 detik)
setInterval(getTime, 1000);
