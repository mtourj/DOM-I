const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
    "img-src-dark": "img/logo_darkMode.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Toggle Night Mode",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// State Variables
let DARK_MODE = false;

// NAV
const append_link = document.createElement('a');
const prepend_link = document.createElement('a');

append_link.setAttribute("href", "#");
append_link.textContent = 'Hello';
prepend_link.setAttribute("href", "#");
prepend_link.textContent = 'Happy?';

const navContainer = document.querySelector("nav");

navContainer.append(append_link);
navContainer.prepend(prepend_link);

const navItems = siteContent["nav"];
const navElements = document.querySelectorAll("nav a");

// This is done in a very, very special way. don't judge. there's logic behind it :)
for (let i = 0; i < navElements.length; i++){
  if(i > 0 && i < navElements.length - 1)
    navElements[i].textContent = navItems["nav-item-" + (i)];
  navElements[i].setAttribute("style", "color: green;");
}

// CTA
const cta = document.querySelector(".cta");
cta.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"];
cta.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
cta.querySelector("img").setAttribute("src", siteContent["cta"]["img-src"]);

// MAIN CONTENT
const topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
bottomContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
bottomContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// LOGO
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CONTACT SECTION
const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contact.querySelectorAll("p")[0].innerHTML = siteContent["contact"]["address"];
contact.querySelectorAll("p")[1].textContent = siteContent["contact"]["phone"];
contact.querySelectorAll("p")[2].textContent = siteContent["contact"]["email"];

// FOOTER
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

// Event listeners

const toggleBtn = cta.querySelector(".cta-text button");

toggleBtn.addEventListener("click", toggleDarkMode);

// There is obviously a much, much better way of doing this...
// but this is whatever. It's still cool.

function toggleDarkMode (){
  DARK_MODE = DARK_MODE ? false : true;
  document.querySelector("body").style.backgroundColor = DARK_MODE ? "#232323" : "white";
  const paragraphs = document.querySelectorAll('p');
  const header4s = document.querySelectorAll('h4');
  const header1s = document.querySelectorAll('h1');
  const footer = document.querySelectorAll('footer');
  const anchors = document.querySelectorAll('a');

  toggleDarkModeElementBulk([paragraphs, header4s, header1s, footer, anchors]);

  // The logo is a little more special than that though...
  const newLogo = DARK_MODE ? siteContent["nav"]["img-src-dark"] : siteContent["nav"]["img-src"];
  document.querySelector('#logo-img').setAttribute("src", newLogo);
}

// Accepts an array of NodeLists, switches all of them at once
function toggleDarkModeElementBulk (elementGroups){
  for(let x = 0; x < elementGroups.length; x++) {
    for (let i = 0; i < elementGroups[x].length; i++){
      elementGroups[x][i].style.color = DARK_MODE ? "white" : "black";
    }
  }
}