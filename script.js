let multiLinksButton1 = document.querySelectorAll(".multi-links1");
let multiLinksButton2 = document.querySelectorAll(".multi-links2");
let subLinks1 = document.querySelector(".sub-links1");
let subLinks2 = document.querySelector(".sub-links2");
let closeNav = document.querySelector(".close-nav");
let openNav = document.querySelector(".open-nav");
let nav = document.querySelector("nav");

let multiLinksButtonArray1 = multiLinksButton1.forEach((eachMultiLinksButton) => {
  eachMultiLinksButton.addEventListener("mouseover", () => {
    subLinks1.style.display = "block";
  })

  eachMultiLinksButton.addEventListener("mouseout", () => {
    subLinks1.style.display = "none";
  })

  subLinks1.addEventListener("mouseover", () => {
    subLinks1.style.display = "block";
  })

  subLinks1.addEventListener("mouseout", () => {
    subLinks1.style.display = "none";
  })
})


let multiLinksButtonArray2 = multiLinksButton2.forEach((eachMultiLinksButton) => {
  eachMultiLinksButton.addEventListener("mouseover", () => {
    subLinks2.style.display = "block";
  })

  eachMultiLinksButton.addEventListener("mouseout", () => {
    subLinks2.style.display = "none";
  })

  subLinks2.addEventListener("mouseover", () => {
    subLinks2.style.display = "block";
  })

  subLinks2.addEventListener("mouseout", () => {
    subLinks2.style.display = "none";
  })
})


openNav.addEventListener("click", () => {
  nav.style.right = "0%";
  openNav.style.display = "none";
})

closeNav.addEventListener("click", () => {
  nav.style.right = "-100%";
  openNav.style.display = "block";
})



// Business Cards Scripting

// Computer Diploma

const computerDiplomaContent = "Looking to master computer skills fast? Turtle Tech offers personalized, hands-on training to help you become tech-savvy in no time! Whether you're a beginner or looking to sharpen your skills, our expert-led sessions cover: Internet Browsing & Research, Microsoft Office (Word, Excel, PowerPoint), Email & Online Communication, Basic Coding & Troubleshooting and much more! Learn at your own pace with one-on-one attention!";
let computerDiplomaBody = document.querySelector(".computer-diploma > .body");
let diplomaMoreOrLess = document.querySelector(".computer-diploma > .more-or-less");

computerDiplomaBody.textContent = `${computerDiplomaContent.substring(0, 200)}...`;

diplomaMoreOrLess.addEventListener("click", () => {
  if (computerDiplomaBody.textContent === `${computerDiplomaContent.substring(0, 200)}...`) {
    computerDiplomaBody.textContent = computerDiplomaContent;
    diplomaMoreOrLess.textContent = "See Less";
  } else {
    computerDiplomaBody.textContent = `${computerDiplomaContent.substring(0, 200)}...`;
    diplomaMoreOrLess.textContent = "See More";
  }
})


// Web Design and Development Training

const webTrainingContent = "Master Web Design & Development with Turtle Tech! Want to build stunning websites from scratch? Turtle Tech offers hands-on Web Design & Development training to help you create professional, responsive websites!. What You'll Learn: HTML, CSS & JavaScript Basics, WordPress & No-Code Website Building, UI/UX Principles for Stunning Designs, Responsive & Mobile-Friendly Development, Hosting & Website Management. One-on-One & Small Group Training Available!";
let webTrainingBody = document.querySelector(".web-training > .body");
let webTrainingMoreOrLess = document.querySelector(".web-training > .more-or-less");

webTrainingBody.textContent = `${webTrainingContent.substring(0, 200)}...`;

webTrainingMoreOrLess.addEventListener("click", () => {
  if (webTrainingBody.textContent === `${webTrainingContent.substring(0, 200)}...`) {
    webTrainingBody.textContent = webTrainingContent;
    webTrainingMoreOrLess.textContent = "See Less";
  } else {
    webTrainingBody.textContent = `${webTrainingContent.substring(0, 200)}...`;
    webTrainingMoreOrLess.textContent = "See More";
  }
})


// Landing Page

const landingPageContent = "Need a professional landing page to attract customers and grow your business? Turtle Tech designs sleek, responsive, and high-converting landing pages tailored to your brand! Eye-catching & modern design, mobile-friendly & fast-loading, clear call-to-action for more sales & leads, easy-to-manage & SEO-optimized. Turn visitors into customers with the perfect first impression!";
let  landingPageBody = document.querySelector(".landing-page > .body");
let  landingPageMoreOrLess = document.querySelector(".landing-page > .more-or-less");

landingPageBody.textContent = `${ landingPageContent.substring(0, 200)}...`;

landingPageMoreOrLess.addEventListener("click", () => {
  if ( landingPageBody.textContent === `${ landingPageContent.substring(0, 200)}...`) {
    landingPageBody.textContent =  landingPageContent;
    landingPageMoreOrLess.textContent = "See Less";
  } else {
    landingPageBody.textContent = `${landingPageContent.substring(0, 200)}...`;
    landingPageMoreOrLess.textContent = "See More";
  }
})


// Website & Mobile App Development

const webDevelopmentContent = "Need a powerful website or mobile app to grow your business? Turtle Tech builds fast, user-friendly, and scalable solutions tailored to your needs! Web & Mobile App Development (Android & iOS), E-Commerce & Business Websites, Custom Software Solutions, UI/UX Design for a Smooth Experience, SEO & Performance Optimization. Bring your ideas to life with expert development!";
let webDevelopmentBody = document.querySelector(".web-development > .body");
let webDevelopmentMoreOrLess = document.querySelector(".web-development > .more-or-less");

webDevelopmentBody.textContent = `${webDevelopmentContent.substring(0, 200)}...`;

webDevelopmentMoreOrLess.addEventListener("click", () => {
  if (webDevelopmentBody.textContent === `${webDevelopmentContent.substring(0, 200)}...`) {
    webDevelopmentBody.textContent = webDevelopmentContent;
    webDevelopmentMoreOrLess.textContent = "See Less";
  } else {
    webDevelopmentBody.textContent = `${webDevelopmentContent.substring(0, 200)}...`;
    webDevelopmentMoreOrLess.textContent = "See More";
  }
})


// E-Business cafe & Shared Workspace

const businessWorkspaceContent = "Need a professional and comfortable space to work? Turtle Tech offers a fully equipped shared workspace designed for entrepreneurs, freelancers, and remote workers! High-speed internet & uninterrupted power supply, comfortable seating & private desks. Printing, scanning & office essentials, quiet & focused work environment. Work smarter in a space built for success!";
let businessWorkspaceBody = document.querySelector(".business-workspace > .body");
let businessWorkspaceMoreOrLess = document.querySelector(".business-workspace > .more-or-less");

businessWorkspaceBody.textContent = `${businessWorkspaceContent.substring(0, 200)}...`;

businessWorkspaceMoreOrLess.addEventListener("click", () => {
  if (businessWorkspaceBody.textContent === `${businessWorkspaceContent.substring(0, 200)}...`) {
    businessWorkspaceBody.textContent = businessWorkspaceContent;
    businessWorkspaceMoreOrLess.textContent = "See Less";
  } else {
    businessWorkspaceBody.textContent = `${businessWorkspaceContent.substring(0, 200)}...`;
    businessWorkspaceMoreOrLess.textContent = "See More";
  }
})


// Pop-Up Scripting

let showPopUp = document.querySelector(".open-pop-up");
let popUpCloseButton = document.querySelector(".pop-up-close-button");
let startAProject = document.querySelector("nav ul > li:last-child a");
let callToAction = document.querySelector(".call-to-action");
let footerCallToAction = document.querySelector(".footer-call-to-action");

window.addEventListener("load", () => {
  setTimeout(() => {
    showPopUp.classList.remove("close-pop-up");
  }, 1000);
})

popUpCloseButton.addEventListener("click", () => {
  showPopUp.classList.add("close-pop-up");
})

startAProject.addEventListener("click", () => {
  showPopUp.classList.remove("close-pop-up");
  if (window.innerWidth <= 749) {
    openNav.style.display = "block";
    nav.style.right = "-100%"; 
  }
})

callToAction.addEventListener("click", () => {
  showPopUp.classList.remove("close-pop-up");
})

footerCallToAction.addEventListener("click", () => {
  showPopUp.classList.remove("close-pop-up");
})