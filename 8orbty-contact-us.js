let currentLang = "en";

function toggleLanguage() {
  if (currentLang === "en") {
    document.getElementById("nav-home").innerText = "الرئيسيه";
    document.getElementById("nav-housing").innerText = "السكن";
    document.getElementById("nav-food").innerText = "الطعام";
    document.getElementById("nav-vr").innerText = "جولات VR";
    document.getElementById("nav-contact").innerText = "تواصل معنا";
    document.getElementById("nav-about").innerText = "عن غربتي";
    document.getElementById("nav-lang").innerText = "English";
    document.getElementById("login").innerText = "تسجيل الدخول";

    document.getElementById("contact-title").innerText = "تواصل معنا";
    document.getElementById("contact-desc").innerText = "نحب أن نسمع منك، املأ النموذج أدناه.";
    document.getElementById("label-name").innerText = "الاسم الكامل";
    document.getElementById("label-email").innerText = "البريد الإلكتروني";
    document.getElementById("label-message").innerText = "رسالتك";
    document.getElementById("submit-btn").innerText = "إرسال الرسالة";

    document.body.dir = "rtl";
    currentLang = "ar";
  } else {
    document.getElementById("nav-home").innerText = "Home";
    document.getElementById("nav-housing").innerText = "Housing";
    document.getElementById("nav-food").innerText = "Food";
    document.getElementById("nav-vr").innerText = "VR Tours";
    document.getElementById("nav-contact").innerText = "Contact Us";
    document.getElementById("nav-about").innerText = "About Us";
    document.getElementById("nav-lang").innerText = "العربية";
    document.getElementById("login").innerText = "Log in";

    document.getElementById("contact-title").innerText = "Contact Us";
    document.getElementById("contact-desc").innerText = "We’d love to hear from you. Fill out the form below.";
    document.getElementById("label-name").innerText = "Full Name";
    document.getElementById("label-email").innerText = "Email";
    document.getElementById("label-message").innerText = "Message";
    document.getElementById("submit-btn").innerText = "Send Message";

    document.body.dir = "ltr";
    currentLang = "en";
  }
}
