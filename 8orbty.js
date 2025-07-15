let currentLang = "en";

function toggleLanguage() {
  if (currentLang === "en") {
    document.getElementById("hero-title").innerHTML =
      "غربتي دليلك بعيدًا عن الوطن<br>نوفر السكن والطعام والدعم النفسي والتدريب<br>كل ما يحتاجه الطالب في مكان واحد";

    document.getElementById("get-started").innerText = "ابدأ الآن";

    document.getElementById("nav-home").innerText = "الرئيسيه";
    document.getElementById("nav-housing").innerText = "السكن";
    document.getElementById("nav-food").innerText = "الطعام";
    document.getElementById("nav-vr").innerText = "جولات VR";
    document.getElementById("nav-contact").innerText = "تواصل معنا";
    document.getElementById("nav-about").innerText = "عن غربتي";
    document.getElementById("nav-lang").innerText = "English";
    document.getElementById("login").innerText = "تسجيل الدخول";

    document.getElementById("feature1-title").innerText = "البحث عن سكن";
    document.getElementById("feature1-desc").innerText = "اكتشف السكن المناسب بالقرب من الجامعة";

    document.getElementById("feature2-title").innerText = "الطعام والوصفات";
    document.getElementById("feature2-desc").innerText = "ابحث عن أماكن للأكل ووصفات اقتصادية";

    document.getElementById("feature3-title").innerText = "جولات الواقع الافتراضي";
    document.getElementById("feature3-desc").innerText = "استكشف جامعتك عن بُعد باستخدام VR";

    document.getElementById("feature4-title").innerText = "أسواق قريبة";
    document.getElementById("feature4-desc").innerText = "ابحث عن متاجر قريبة لشراء الطعام والبقالة";

    document.body.dir = "rtl";
    currentLang = "ar";
  } else {
    document.getElementById("hero-title").innerHTML =
      "Ghorbety is your guide away from home<br>We provide housing, food, training, and emotional support<br>Everything a student needs in one place";

    document.getElementById("get-started").innerText = "Get Started";
    document.getElementById("nav-home").innerText = "Home";
    document.getElementById("nav-housing").innerText = "Housing";
    document.getElementById("nav-food").innerText = "Food";
    document.getElementById("nav-vr").innerText = "VR Tours";
    document.getElementById("nav-contact").innerText = "Contact Us";
    document.getElementById("nav-about").innerText = "About Us";
    document.getElementById("nav-lang").innerText = "اللغة";
    document.getElementById("login").innerText = "Log in";

    document.getElementById("feature1-title").innerText = "Find Housing";
    document.getElementById("feature1-desc").innerText = "Discover affordable housing near your campus";

    document.getElementById("feature2-title").innerText = "Meals and Cooking";
    document.getElementById("feature2-desc").innerText = "Find places to eat and cheap food recipes";

    document.getElementById("feature3-title").innerText = "VR Campus Tours";
    document.getElementById("feature3-desc").innerText = "Explore your campus remotely using VR technology";

    document.getElementById("feature4-title").innerText = "Supermarkets Nearby";
    document.getElementById("feature4-desc").innerText = "Locate nearby stores to buy food and groceries";

    document.body.dir = "ltr";
    currentLang = "en";
  }
}
