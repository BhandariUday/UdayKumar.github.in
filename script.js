// 📄 Resume Download
function downloadResume() {
  window.open("resume.pdf", "_blank");
}

// 📧 Email Button
function sendEmail() {
  window.location.href = "mailto:yourmail@gmail.com";
}

// 📞 Phone Call Button
function callMe() {
  window.location.href = "tel:+919999999999";
}

// 📋 Copy Email to Clipboard
function copyEmail() {
  navigator.clipboard.writeText("yourmail@gmail.com");
  alert("Email copied to clipboard!");
}

// 🌐 Open Social Links
function openInstagram() {
  window.open("https://instagram.com/yourusername", "_blank");
}

function openArtstation() {
  window.open("https://www.artstation.com/yourusername", "_blank");
}

function openLinkedIn() {
  window.open("https://linkedin.com/in/yourusername", "_blank");
}

// ⬇️ Smooth Scroll (for menu links)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
