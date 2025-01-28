function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


const serviceItems = document.querySelectorAll('.service-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

serviceItems.forEach(item => observer.observe(item));

// Scroll smoothly to the section when clicked
function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId.toLowerCase()); // Lowercase for matching IDs
  if (section) {
      window.scrollTo({
          top: section.offsetTop - 40, // Adjust for header height if needed
          behavior: 'smooth'
      });
  }
}

// Additional JS for menu or interactive actions


// Navigation to sections
function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
  });
}


// Additional JS for menu or interactive actions

// Navigation to sections
function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
  });
}

// Change Language Functionality for Dropdown (Optional)
function changeLanguage(language) {
  if (language === 'en') {
      document.getElementById('enBtn').click();
  } else if (language === 'sq') {
      document.getElementById('sqBtn').click();
  }
}
function changeLanguage(language) {
  const translations = {
      en: {
          "home-title": "AGI PLAST company offers safety and quality in its products as a company with 19 years of experience.",
          "home-subtitle": "Discover the latest items and videos",
          "button:first-of-type": "View Catalog",
          "button:last-of-type": "Watch Video",
          "install-title": "INSTALLATION",
          "indtall-text": "We offer different installations at any time and place according to your request.",
          "delivery-title": "DELIVERY",
          "delivery-text": "Fast and reliable delivery to any location you need.",
          "materials-title": "MATERIALS",
          "materials-text": "We work with the highest quality German materials.",
          "payment-title": "PAYMENT",
          "payment-text": "We offer different payments with bank loans or loans in our firm.",
          "product-h4":  "Product 1",
          "product-p": "Discover our first amazing product with fantastic features.",
          "product-h4": "Product 2",
          "product-p2": "Top-notch quality and performance.",
          "product-h4": "Product 3",
          "product-h4": "Efficiency and durability in one product.",
          "contact-title": "Contact Us",
          "contact-description": "If you have any questions or need assistance, you can contact us via WhatsApp:",
          "location-title": "Our Location",
          "location-description": "You can find us at the following address:",
          "aboutus": "About Us",
          "ABoutus-p": "We are a company dedicated to providing the best services and products to our customers",
          "Follow-us": "Follow Us",
          "footer": "&copy; 2025 AGI Plast. All rights reserved",
      },
      sq: {
          "home-title": "Kompania AGI PLAST ofron siguri dhe cilësi në produktet e saj si një kompani me 19 vjet përvojë.",
          "home-subtitle": "Zbulo produktet dhe videot më të fundit",
          "button:first-of-type": "Shiko Katalogun",
          "button:last-of-type": "Shiko Video",
          "install-title": "Instalimi",
          "indtall-text": "Ne ofrojmë instalime të ndryshme në çdo kohë dhe vend sipas kërkesës suaj.",
          "delivery-titlee": "Dergesa",
          "delivery-text": "Dergesa i shpejtë dhe të besueshëm në çdo vend që ju nevojitet.",
          "materials-title": "MATERIALET",
          "materials-text": "Ne punojmë me materialet më të cilësisë më të lartë nga Gjermania.",
          "payment-title": "PAGESA",
          "product-h4":  "Produkti 1",
          "product-p": "Zbuloni produktin tonë të parë të mahnitshëm me karakteristika fantastike.",
          "product-h4": "Produkti 2",
          "product-p2": "Cilësi dhe performancë e nivelit të lartë.",
          "product-h4": "Produkti 3",
          "product-p3": "Efikasitet dhe qëndrueshmëri në një produkt.",
          "payment-text": "Ne ofrojmë mundësi të ndryshme pagese me kredi bankare ose hua në kompaninë tonë.",
          "contact-title": "Na kontaktoni",
          "contact-description": "Nëse keni pyetje ose keni nevojë për asistencë, mund të na kontaktoni përmes WhatsApp:",
          "location-title": "Vendndodhja jonë",
          "location-description": "Mund të na gjeni në adresën e mëposhtme:",
          "aboutus": "Rreth Nesh",
          "ABoutus-p": "Ne jemi një kompani e përkushtuar për të ofruar shërbimet dhe produktet më të mira për klientët tanë",
          "Follow-us": "Na ndiqni",
          "footer": "&kopjoni; 2025 AGI Plast. Të gjitha të drejtat e rezervuara"

      },
      de: {
        "home-title": "Die Firma AGI PLAST bietet Sicherheit und Qualität in ihren Produkten als Unternehmen mit 19 Jahren Erfahrung.",
"home-subtitle": "Entdecken Sie die neuesten Artikel und Videos",
"button:first-of-type": "Katalog anzeigen",
"button:last-of-type": "Video ansehen",
"install-title": "INSTALLATION",
"indtall-text": "Wir bieten verschiedene Installationen zu jeder Zeit und an jedem Ort entsprechend Ihrer Anfrage.",
"delivery-title": "LIEFERUNG",
"delivery-text": "Schnelle und zuverlässige Lieferung an jeden gewünschten Ort.",
"materials-title": "MATERIALIEN",
"materials-text": "Wir arbeiten mit deutschen Materialien höchster Qualität.",
"payment-title": "ZAHLUNG",
"payment-text": "Wir bieten verschiedene Zahlungen mit Bankdarlehen oder Darlehen in unserem Unternehmen an.",
"product-h4": "Produkt 1",
"product-p": "Entdecken Sie unser erstes erstaunliches Produkt mit fantastischen Funktionen.",
"product-h4": "Produkt 2",
"product-p2": "Erstklassige Qualität und Leistung.",
"product-h4": "Produkt 3",
"product-h4": "Effizienz und Haltbarkeit in einem Produkt.",
"contact-title": "Kontakt",
"contact-description": "Wenn Sie Fragen haben oder Hilfe benötigen, können Sie uns über WhatsApp kontaktieren:",
"location-title": "Unser Standort",
"location-description": "Sie finden uns unter folgender Adresse:",
"aboutus": "Über uns",
"ABoutus-p": "Wir sind ein Unternehmen, das sich der Bereitstellung der besten Dienstleistungen und Produkte für unsere Kunden verschrieben hat",
"Follow-us": "Folgen Sie uns",
"footer": "&copy; 2025 AGI Plast. Alle Rechte vorbehalten",
          
      }
  };

  // Merr tekstin në gjuhën e zgjedhur dhe e vendos në elementet përkatëse
  const lang = translations[language];
  for (let key in lang) {
      const element = document.getElementById(key);
      if (element) {
          element.innerText = lang[key];
      }
    }
}
// Function to toggle the language dropdown on mobile
function toggleDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  dropdown.classList.toggle('show');
}

// Add an event listener for clicks on the language button (for mobile)
const languageButton = document.getElementById('changeLanguage');
if (languageButton) {
  languageButton.addEventListener('click', toggleDropdown);
}
