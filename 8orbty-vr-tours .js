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

  const texts = [
    ["vr-title-1", "استكشف الحرم الجامعي من بيتك", "Explore your campus from home"],
    ["vr-p1", "في غربتي بنستخدم أحدث تقنيات VR لتوصيل تجربة الجامعة للطلاب في بيوتهم", "At Ghorbety, we use cutting-edge VR to bring the university experience straight to students’ homes."],
    ["vr-p2", "بنقرة واحدة تقدر تتجول في الجامعة وكأنك هناك", "With just one click, students can explore their campus as if they were walking through it in real life."],
    ["vr-p3", "شوف الكليات، امشي في القاعات، واعرف أهم الأماكن في الجامعة", "They can check out the faculties, walk through lecture halls, and discover key locations on campus."],
    
    ["vr-title-2", "خليك واثق قبل ما تبدأ", "Feel confident before arriving"],
    ["vr-p4", "الواقع الافتراضي بيقلل التوتر وبيخليك واثق", "VR helps students feel more confident and less anxious about what’s ahead."],
    ["vr-p5", "هتاخد صورة واضحة تساعدك تقرر صح", "It gives them a clear picture so they can make smarter, more informed decisions before the journey begins."],
    
    ["vr-title-3", "نستخدم التكنولوجيا لتمكين الطلاب", "Empowering Students with Technology"],
    ["vr-p6", "مش بنسهل بس، إحنا بندعم الطلاب", "At Ghorbety, we don’t just use technology to simplify things."],
    ["vr-p7", "نخليك مستعد، متصل، ومتحمس للي جاي", "We use it to empower students — to help them feel ready, connected, and excited about what’s next."],
    
    ["vr-title-4", "جربها دلوقتي", "Try it now"],
    ["vr-p8", "استكشف الجامعة قبل ما تروحها", "Explore your university before you even set foot on campus."]
  ];

  texts.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  currentLang = isArabic ? "ar" : "en";
}
