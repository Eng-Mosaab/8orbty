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

  const title = document.getElementById("food-title1");
  if (title) {
    title.innerText = isArabic
      ? "في غربتي، نحن نعلم أن الطلاب غالبًا ما يكونون عالقين بين الرغبات والميزانية المحدودة"
      : "At Ghorbety, we know students often find themselves stuck between cravings and tight budgets";
  }

  const foodParagraphs = [
    ["food-p1", "أحيانًا كل ما تريده هو وجبة جيدة، لكن الأسعار لا تساعد دائمًا", "Sometimes you just want a good meal, but the prices don’t always help"],
    ["food-p2", "لذلك قدمنا خدمة طلب الطعام داخل التطبيق التي تتيح للطلاب الحصول على الوجبات التي يحبونها", "That’s why we’ve introduced an in-app food ordering service that allows students to get the meals they love"],
    ["food-p3", "بسعر يقدروا يدفعوه فعلاً", "At prices they can actually afford"],
    ["food-p4", "تعاونّا مع مجموعة كبيرة من المطاعم الموثوقة", "We’ve partnered with a wide range of trusted restaurants"],
    ["food-p5", "عشان نضمن للطلاب أكل متنوع وجودة عالية", "To make sure students have access to quality food with real variety"],
    ["food-p6", "وأحلى حاجة؟", "And the best part?"],
    ["food-p7", "في خصومات حصرية وعروض خاصة على الوجبات اليومية والوجبات السريعة", "We offer exclusive discounts and special offers on fast food and daily meals"],
    ["food-p8", "بس للطلاب اللي بيطلبوا من خلال غربتي", "Just for students who order through Ghorbety"],
    ["food-p9", "بضغطة زر، الطالب يقدر يستعرض الوجبات، يطلب، يدفع، ويستمتع بالأكل", "With a few taps, students can browse meals, place their order, pay, and enjoy their food"],
    ["food-p10", "من غير مصاريف زيادة", "No extra fees"],
    ["food-p11", "من غير تعب", "No hassle"],
    ["food-p12", "مجرد أكل حلو وبسعر يناسبك كطالب", "Just good food at student-friendly prices"],
    ["food-p13", "غربتي مش بس للسكن", "Ghorbety isn’t just about housing"],
    ["food-p14", "هي بتوفر كل اللي محتاجه في حياتك كطالب", "It’s about taking care of every part of student life"],
    ["food-p15", "حتى أكلك", "Including what you eat"]
  ];

  foodParagraphs.forEach(([id, ar, en]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = isArabic ? ar : en;
  });

  currentLang = isArabic ? "ar" : "en";
}
