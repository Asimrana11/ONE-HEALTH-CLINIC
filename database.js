// Add to your existing mock database
const appointments = [
  {
    id: "APT1001",
    patientId: "PAT12345",  // Links to barcode ID
    patientName: "John Doe",
    date: "2023-07-20",
    status: "Checked-In",   // Updated after scan
    doctor: "Dr. Smith"
  }
];

// Function to update appointment status after scan
function checkInPatient(patientId) {
  const appointment = appointments.find(apt => apt.patientId === patientId);
  if (appointment) {
    appointment.status = "Checked-In";
    return true;
  }
  return false;
}
