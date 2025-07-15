
let currentLang = "en";

function toggleLanguage() {
  const isArabic = currentLang === "en";
  document.body.dir = isArabic ? "rtl" : "ltr";

  const navItems = [
    ["nav-home", "الرئيسية", "Home"],
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

  const contentItems = [
    ["community-title", "في غربتي، حسينا بالغربة قبل ما تبدأ", "At Ghorbety, we felt the homesickness before it even started"],
    ["community-p1", "عارفين إحساس الطالب اللي بيسيب بيته ويدخل عالم جديد لوحده", "We understand what it’s like for a student to leave home and step into a new world all alone"],
    ["community-p2", "عشان كده عملنا أول تطبيق ذكي في مصر بيدعم طلاب الجامعة اللي ساكنين بعيد عن أهلهم", "That’s why we decided to build the first smart app in Egypt dedicated to truly supporting university students living away from home"],
    ["community-p3", "غربتي مش مجرد تطبيق", "Ghorbety isn’t just an app"],
    ["community-p4", "ده مكان بيجمع للطلبة كل اللي محتاجينه عشان يعيشوا ويتعلموا وينموا", "It’s a space that brings students everything they need to live, study, and grow"],
    ["community-p5", "من سكن آمن وبسعر مناسب للطلبة", "From safe and affordable student housing"],
    ["community-p6", "لمصادر دراسية موثوقة", "To reliable academic resources"],
    ["community-p7", "لفرص تدريب حقيقية تفتح أبواب الشغل", "To real training opportunities that open doors to careers"],
    ["community-p8", "ولخدمات يومية بتخلي الحياة أسهل", "To everyday services that make life easier"],
    ["community-p9", "لكن اللي فعلاً بيميز غربتي هو المجتمع الطلابي اللي بنبنيه", "But what makes Ghorbety special is the student community it creates"],
    ["community-p10", "مكان فيه ناس بتتكلم", "Where people talk"],
    ["community-p11", "وتدعم بعض", "Support each other"],
    ["community-p12", "ويحسوا إن ليهم مكان ينتموا ليه", "And feel like they truly belong"],
    ["community-p13", "إحنا مؤمنين إن البُعد عن البيت مش لازم يكون شعور بالوحدة", "We believe that being away from home doesn’t have to feel lonely"],
    ["community-p14", "لما تبقى وسط ناس فاهمينك وبيشاركوك نفس التجربة", "When you’re surrounded by people who understand, support, and share the same journey"],
    ["community-p15", "غربتي مش مجرد خدمة", "Ghorbety is not just a service"],
    ["community-p16", "غربتي مجتمع", "Ghorbety is a community"],
    ["community-p17", "لأن البعد عن البيت بيكون أسهل", "Because being far from home is easier"],
    ["community-p18", "لما نكون مع بعض", "When we’re together"]
  ];

  contentItems.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  const section = document.querySelector(".community-section");
  if (section) {
    section.style.flexDirection = isArabic ? "column-reverse" : "row";
    section.style.textAlign = isArabic ? "right" : "left";
  }

  currentLang = isArabic ? "ar" : "en";
}
