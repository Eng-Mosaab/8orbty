let currentLang = "en";

function toggleLanguage() {
  const isArabic = currentLang === "en";
  document.body.dir = isArabic ? "rtl" : "ltr";

  const navIds = [
    ["nav-home", "الرئيسية", "Home"],
    ["nav-housing", "السكن", "Housing"],
    ["nav-food", "الطعام", "Food"],
    ["nav-vr", "جولات VR", "VR Tours"],
    ["nav-contact", "تواصل معنا", "Contact Us"],
    ["nav-about", "عن غربتي", "About Us"],
    ["nav-lang", "اللغة", "Language"],
    ["login", "تسجيل الدخول", "Log in"]
  ];

  navIds.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  const title = document.getElementById("housing-title");
  if (title) {
    title.innerText = isArabic
      ? "مع غربتي، الطلاب مش بس بيدوروا على مكان يناموا فيه"
      : "With Ghorbety, university students don’t just search for a place to stay";
  }

  const housingParagraphs = [
    ["housing-p1", "هما بيدوروا على راحة وأمان وسعر يناسب ميزانيتهم كطلاب", "They search for comfort, safety, and a price that fits their student budget"],
    ["housing-p2", "عشان كده وفرنا نظام كامل يساعدهم يستعرضوا ويختاروا ويحجزوا الشقة اللي تناسبهم من موبايلهم", "That’s why we’ve created a complete system that helps them browse, choose, and book the apartment that suits them best — all from their phone"],
    ["housing-p3", "من خلال غربتي، الطلاب يقدروا يشوفوا اختيارات سكن متنوعة وموثقة", "Through Ghorbety, students can explore a variety of verified housing options"],
    ["housing-p4", "يقدروا يعرفوا المسافة بين الشقة والجامعة", "They can check the distance from the apartment to their university"],
    ["housing-p5", "ويقارنوا الأسعار", "Compare prices"],
    ["housing-p6", "ويختاروا مكان نظيف وآمن وموقعه ممتاز", "And pick a clean, safe, and well-located place that fits their lifestyle and needs"],
    ["housing-p7", "بس اللي بيميزنا بجد هو راحة البال", "But what truly sets us apart is the peace of mind we provide"],
    ["housing-p8", "كل شقة على غربتي بعقد إيجار رسمي", "Every apartment listed on Ghorbety comes with official legal rental contracts"],
    ["housing-p9", "الطالب بياخد أوراق قانونية تضمن حقوقه", "Students receive proper paperwork that protects their rights and ensures transparency in the rental process"],
    ["housing-p10", "غربتي مش مجرد خدمة، ده شريك حقيقي", "Ghorbety isn’t just a service — it’s a student’s trusted partner"],
    ["housing-p11", "بنوفر سكن قانوني ودعم كامل", "We provide affordable housing, legal protection, and full support"],
    ["housing-p12", "علشان يركز في دراسته وهو مطمن", "So students can focus on their studies and settle into university life with confidence"]
  ];

  housingParagraphs.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  currentLang = isArabic ? "ar" : "en";
}
