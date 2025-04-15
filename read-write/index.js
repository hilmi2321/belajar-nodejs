const fs = require("fs");

// Membuat readable stream dari input.txt
const readableStream = fs.createReadStream("input.txt", "utf8");

// Membuat writable stream ke output.txt
const writableStream = fs.createWriteStream("output.txt");

// Mengalirkan data dari readable stream ke writable stream
readableStream.pipe(writableStream);

// Menangani event saat proses selesai
writableStream.on("finish", () => {
  console.log("Proses penyalinan selesai!");
});

// Menangani error yang mungkin terjadi
readableStream.on("error", (err) => {
  console.error("Terjadi kesalahan saat membaca file:", err);
});

writableStream.on("error", (err) => {
  console.error("Terjadi kesalahan saat menulis ke file:", err);
});
