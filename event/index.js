// TODO 1: Buat atau impor variabel EventEmitter dari core module events.
const { EventEmitter } = require("events");

// TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter.
const myEmitter = new EventEmitter();

// TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
const birthdayEventListener = (name) => {
  console.log(`Selamat ulang tahun, ${name}!`);
};

// Menambahkan listener untuk event 'birthday' pada myEmitter
myEmitter.on("birthday", birthdayEventListener);

// TODO 4: Bangkitkan event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEmitter.emit("birthday", "Nama Anda"); // Ganti 'Nama Anda' dengan nama Anda
