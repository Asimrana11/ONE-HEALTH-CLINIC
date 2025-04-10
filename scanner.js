// Mock patient database (replace with Firebase in production)
const patients = [
  { id: "PAT12345", name: "John Doe", dob: "1985-07-15", lastVisit: "2023-05-10" },
  { id: "PAT67890", name: "Jane Smith", dob: "1990-11-22", lastVisit: "2023-06-05" }
];

let scanner;
const scanBtn = document.getElementById("toggleScanner");
const videoElement = document.getElementById("scanner");
const resultDiv = document.getElementById("scanResult");
const patientInfoDiv = document.getElementById("patientInfo");

// Initialize scanner
scanBtn.addEventListener("click", async () => {
  if (!scanner) {
    scanner = new ZXing.BrowserQRCodeReader();
    scanBtn.textContent = "Stop Scanner";
    
    try {
      const result = await scanner.decodeFromVideoDevice(null, videoElement, (result, error) => {
        if (result) {
          handleScan(result.text);
        }
        if (error) {
          console.error(error);
        }
      });
    } catch (err) {
      console.error("Scanner error:", err);
    }
  } else {
    scanner.reset();
    scanner = null;
    scanBtn.textContent = "Start Scanner";
  }
});

// Handle scanned data
function handleScan(barcodeData) {
  const patient = patients.find(p => p.id === barcodeData);
  
  if (patient) {
    patientInfoDiv.innerHTML = `
      <p><strong>ID:</strong> ${patient.id}</p>
      <p><strong>Name:</strong> ${patient.name}</p>
      <p><strong>DOB:</strong> ${patient.dob}</p>
    `;
    resultDiv.classList.remove("d-none");
    
    // Stop scanner after successful scan
    if (scanner) scanner.reset();
    scanner = null;
    scanBtn.textContent = "Start Scanner";
  } else {
    alert("Patient not found in database!");
  }
}

// Check-in button
document.getElementById("checkInBtn").addEventListener("click", () => {
  alert("Patient checked in successfully!");
  resultDiv.classList.add("d-none");
});
