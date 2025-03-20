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