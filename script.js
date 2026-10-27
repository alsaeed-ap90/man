function highlightSection(id) {
  const section = document.getElementById(id);
  section.style.backgroundColor = "#fff8dc";
  section.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    section.style.backgroundColor = "white";
  }, 2000);
}

// حركة عند الضغط على الصور
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    alert("شكراً لاهتمامك! هذه صورة من خدماتنا.");
  });
});
function showPrice(button, price) {
  const priceDiv = button.nextElementSibling;
  priceDiv.textContent = price;
  priceDiv.style.display = "block";
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // حركة بسيطة عند الإرسال
  document.getElementById("formResponse").textContent = 
    "شكراً يا " + name + "! تم استلام رسالتك وسنرد عليك قريباً.";

  document.getElementById("formResponse").style.color = "#ffd700";

  // إعادة تعيين النموذج
  this.reset();
});
// حركة عند الضغط على أيقونة التواصل
document.querySelectorAll(".social-icons a").forEach(icon => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سيتم تحويلك إلى صفحتنا قريباً.");
  });
});
#countdown {
  text-align: center;
  padding: 60px 20px;
  background: #444; /* رمادي غامق */
  color: #ffd700;   /* زهبي */
  border-radius: 10px;
  margin: 40px auto;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

#timer {
  font-size: 40px;
  font-weight: bold;
  margin: 20px 0;
  color: #ffd700;
}
// حركة بسيطة للبانر عند تحميل الصفحة
window.addEventListener("load", () => {
  const banner = document.getElementById("banner");
  banner.style.transition = "background 2s";
  banner.style.background = "linear-gradient(90deg, #ffd700, #b8860b)";
});
function showOffer(button, details) {
  const detailsDiv = button.nextElementSibling;
  detailsDiv.textContent = details;
  detailsDiv.style.display = "block";
}
// حركة عند الضغط على أيقونة التواصل
document.querySelectorAll(".social-icons a").forEach(icon => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سيتم تحويلك إلى صفحتنا قريباً.");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.getElementById("chatBtn");
  const chatWindow = document.getElementById("chatWindow");

  chatBtn.addEventListener("click", () => {
    if (chatWindow.style.display === "block") {
      chatWindow.style.display = "none";
    } else {
      chatWindow.style.display = "block";
    }
  });

  // يقفل النافذة لو ضغطت براها
  document.addEventListener("click", (event) => {
    if (!chatWindow.contains(event.target) && event.target !== chatBtn) {
      chatWindow.style.display = "none";
    }
  });
});
