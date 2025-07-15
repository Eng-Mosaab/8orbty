// 8orbty-vr.js
let currentLang = "en";

function toggleLanguage() {
  const isArabic = currentLang === "en";
  document.body.dir = isArabic ? "rtl" : "ltr";

  const navItems = [
    ["nav-home","الرئيسيه", "Home"],
    ["nav-housing", "السكن", "Housing"],
    ["nav-food", "الطعام", "Food"],
    ["nav-vr", "جولات VR", "VR Tours"],
    ["nav-contact", "تواصل معنا", "Contact Us"],
    ["nav-about", "عن غربتي", "About Us"],
    ["nav-lang", "اللغة", "Language"],
    ["login", "تسجيل الدخول", "Log in"]
  ];

  navItems.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  document.getElementById("vr-title").innerText = isArabic
    ? "في غربتي، نستخدم أحدث تقنيات الواقع الافتراضي لنقل تجربة الجامعة مباشرة إلى منازل الطلاب"
    : "At Ghorbety, we use cutting-edge Virtual Reality (VR) technology to bring the university experience straight to students’ homes";

  const vrParagraphs = [
    ["vr-p1", "بنقرة واحدة فقط، يمكن للطلاب استكشاف الحرم الجامعي كما لو كانوا يتجولون فيه فعليًا", "With just one click, students can explore their campus as if they were walking through it in real life"],
    ["vr-p2", "يمكنهم التعرف على الكليات", "They can check out the faculties"],
    ["vr-p3", "المشي داخل القاعات الدراسية", "Walk through lecture halls"],
    ["vr-p4", "اكتشاف المواقع المهمة داخل الحرم الجامعي", "Discover key locations on campus"],
    ["vr-p5", "وكل ذلك من غرفة نومهم المريحة", "All from the comfort of their own room"],
    ["vr-p6", "يساعد الواقع الافتراضي الطلاب على الشعور بثقة أكبر وقلق أقل تجاه المستقبل", "VR helps students feel more confident and less anxious about what’s ahead"],
    ["vr-p7", "يوفر لهم صورة واضحة", "It gives them a clear picture"],
    ["vr-p8", "ليتخذوا قرارات أذكى وأكثر وعيًا قبل بدء الرحلة", "So they can make smarter, more informed decisions before the journey even begins"],
    ["vr-p9", "في غربتي، لا نستخدم التكنولوجيا فقط للتسهيل", "At Ghorbety, we don’t just use technology to simplify things"],
    ["vr-p10", "نستخدمها لتمكين الطلاب", "We use it to empower students"],
    ["vr-p11", "لمساعدتهم على الشعور بالاستعداد", "To help them feel ready"],
    ["vr-p12", "والاتصال بالمكان", "Connected"],
    ["vr-p13", "والحماس للمستقبل", "And excited about what’s coming next"],
    ["vr-p14", "جربها الآن", "Try it now"],
    ["vr-p15", "واستكشف جامعتك قبل أن تطأها قدمك", "And explore your university before you even set foot on campus"]
  ];

  vrParagraphs.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  const section = document.querySelector(".vr-section");
  if (section) {
    section.style.flexDirection = isArabic ? "column-reverse" : "row";
    section.style.textAlign = isArabic ? "right" : "left";
  }

  currentLang = isArabic ? "ar" : "en";
}