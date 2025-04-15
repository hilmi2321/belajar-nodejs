const initialMemoryUsage = process.memoryUsage().heapUsed; // Capture initial memory usage
const yourName = "Hilmi"; // Replace with your actual name
const environment = process.env.NODE_ENV || "development"; // Environment variable, default to 'development'

for (let i = 0; i <= 10000; i++) {
  // This loop will increase memory usage
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // Capture memory usage after the loop

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
console.log(`Penggunaan memori saat ini: ${currentMemoryUsage}`);
