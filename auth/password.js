// ===============================
// SECURE SHA-256 PASSWORD CHECK
// ===============================

// Replace this with your SHA-256 hash
const PASSWORD_HASH = "ff3f3be9a9c6155b7c5f6b5a40584fd68e91f99112791d3c71a0dcafe2ad279f";

// Hash function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  return [...new Uint8Array(hashBuffer)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Validate login
async function validatePassword() {
  const input = document.getElementById("password").value.trim();
  const hash = await sha256(input);

  if (hash === PASSWORD_HASH) {
    localStorage.setItem("auth", "true");
    window.location.href = "../index.html";
  } else {
    alert("Incorrect password");
  }
}
