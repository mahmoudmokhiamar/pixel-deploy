const translations = {
  en: {
    home: "Home",
    Courses: "Courses",
    teachers: "Teachers",
    offers: "Offers",
    exams: "Exams",
    contact: "Contact us",
    pixel_academy: "Hamida Academy",
    join_100_student: "Join us",
    student_degree: "Student Degree",
    Exam_Name: "Exam Name",
    Exam_Degree: "Exam Degree",
    Student_Degree: "Student Degree",
    Exam_entry_date: "Exam Entry Date",
    Exam_answers: "Exam Answers",
    change_language: "Change Language",
    profile: "Profile",
    settings: "Settings",
    redeem_code: "Redeem Code/Budget History",
    log_out: "Log Out",
    all_courses: "All Courses",
    purschased_courses: "Purschased Courses",
    subject_teacher: "Subjects and Teacher",
    our_latest_courses: "Our Latest Courses",
    online_courses: "2k+ Online Courses",
    lifetime: "Lifetime Access",
    value_money: "Value for Money",
    lifetime_support: "Lifetime Support",
    community_support: "Community Support",
    get_started: "Get Started",
    log_in: "Log In",
    our_courses: "Our Courses",
  },
  ar: {
    home: "الرئيسية",
    Courses: "الكورسات",
    teachers: "المدرسين",
    offers: "العروض",
    exams: "الامتحانات",
    contact: "تواصل معنا",
    pixel_academy: "حميده اكاديمي",
    join_100_student: "انضم الينا الان",
    student_degree: "درجات الطالب",
    Exam_Name: "اسم الامتحان",
    Exam_Degree: "درجة الامتحان",
    Student_Degree: "درجة الطالب",
    Exam_entry_date: "تاريخ دخول الامتحان",
    Exam_answers: "إجابات الامتحان",
    change_language: "تغيير اللغة",
    profile: "الصفحة الشخصية",
    settings: "الاعدادات",
    redeem_code: "شحن الكود/تاريخ الميزانية",
    log_out: "تسجيل الخروج",
    all_courses: "جميع الكورسات",
    purschased_courses: "الكورسات المشتراة",
    subject_teacher: "المواد والمدرسين",
    latest_courses: "أحدث الكورسات",
    our_latest_courses: "أحدث الكورسات",
    online_courses: "متابعة دورية",
    lifetime: "تصفح أمن",
    value_money: "قيمة مقابل السعر",
    lifetime_support: "دعم مستمر",
    community_support: "انضم للمنظومة المتكاملة ",
    get_started: "ابدأ الان",
    log_in: "تسجيل الدخول",
    our_courses: "كورسات",
  },
};

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    const translation = translations[language][translationKey];
    if (element.tagName === "A" || element.tagName === "BUTTON") {
      // Set innerHTML for elements that might contain HTML (e.g., icons)
      element.innerHTML = translation;
    } else {
      // Set textContent for elements with plain text
      element.textContent = translation;
    }
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);

  document.getElementById("language-toggle").addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("lang") || "en";
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  });
  document
    .getElementById("language-toggle-mob")
    .addEventListener("click", () => {
      const currentLanguage = localStorage.getItem("lang") || "en";
      const newLanguage = currentLanguage === "en" ? "ar" : "en";
      setLanguage(newLanguage);
      localStorage.setItem("lang", newLanguage);
    });
});
