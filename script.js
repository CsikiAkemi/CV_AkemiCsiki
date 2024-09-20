const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function openEmailClient() {
  const recipient = 'sisina.akemi@gmail.com'; // Az email címzettje
  const subject = 'Write the subject';     // Téma
  const body = '';       // Üzenet törzse
  
  // Az URL-kódolt email sablon generálása
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // A levelező kliens megnyitása
  window.location.href = mailtoLink;
}


document.addEventListener('DOMContentLoaded', function() {
  // Load translations from JSON file
  fetch('translations.json')
      .then(response => response.json())
      .then(data => {
          window.translations = data; // Store translations in a global object
          changeLanguage('en'); // Default language
      });
  
  // Add event listeners for language switch buttons
  document.querySelectorAll('.language-switch button').forEach(button => {
      button.addEventListener('click', () => {
          changeLanguage(button.dataset.lang);
      });
  });
});

function changeLanguage(lang) {
  const translations = window.translations[lang];
  if (!translations) return ;


  // Update text content based on translations
  document.querySelector('.logo').textContent = translations.logo;
  document.querySelectorAll('.nav-link')[0].textContent = translations.homelink;
  document.querySelectorAll('.nav-link')[1].textContent = translations.aboutlink;
  document.querySelectorAll('.nav-link')[2].textContent = translations.projectslink;


  document.querySelector('.hello p').textContent = translations.helloText;
  document.querySelector('.text-info p').textContent = translations.infoText; // corrected from 'description'
  document.querySelector('.btnHire').textContent = translations.hireBtn; // corrected from 'hire_me'
  document.querySelector('.btnDwnload').textContent = translations.downloadBtn; // corrected from 'download_cv'

  document.querySelector('.abouth1').textContent = translations.aboutHeader; // corrected from 'about_me_title'
  document.querySelector('.about-me h2').textContent = translations.abouttitle; // corrected from 'about_me_title'
  document.querySelector('.about-info p').textContent = translations.aboutText; // corrected from 'about_me_description'
  document.querySelector('.skills h1').textContent = translations.skillsHeader; // corrected from 'skills_title'
  document.querySelector('.projecth1').textContent = translations.projectsHeader; // corrected from 'projects_title'
  

  document.querySelector('.right').textContent = translations.footerRight; // corrected from 'projects_title'
  document.querySelectorAll('.card .content a').forEach(link => {
      link.textContent = translations.readMore || 'Read More'; // added default value for safety
  });

  const footerLinks = document.querySelectorAll('.footer .row ul li a');

  footerLinks[0].textContent = translations.footerHome;
  footerLinks[1].textContent = translations.footerAbout;
  footerLinks[2].textContent = translations.footerProjects;
  
  

}
