// Mobile Navigation
const openNav = document.querySelector(".mobile-nav .open");
const closeNav = document.querySelector(".mobile-nav .close");
const menu = document.querySelector(".menu");
const social = document.querySelector(".social");
openNav.addEventListener("click", () => {
  menu.classList.add("active");
  closeNav.classList.add("active");
  openNav.classList.add("active");
  social.classList.add("active");
});
closeNav.addEventListener("click", () => {
  menu.classList.remove("active");
  openNav.classList.remove("active");
  closeNav.classList.remove("active");
  social.classList.remove("active");
});

// Features Toggle

const featuresId = document.querySelectorAll("[data-id]");
const featured = document.querySelectorAll(".feature");
featuresId.forEach((features) => {
  features.addEventListener("click", () => {
    const dataId = features.dataset.id;
    const data = document.getElementById(dataId);
    const prevEl = features.previousElementSibling;
    const pre = document.querySelector(".active");
    featured.forEach((featur) => {
      const prevFeature = featur.previousElementSibling;
      // console.log(prevFeature);

      if (prevEl == null) {
        data.classList.add("active");
      } else if (!prevEl.classList.contains("active")) {
        // prevEl.classList.remove('active')
        data.classList.toggle("active");
      } else {
        pre.classList.remove("active");
        data.classList.toggle("active");
        prevFeature.classList.remove("active");
        features.classList.toggle("active");
        // console.log(prevEl);
      }
    });
    // console.log(data)
  });
});

const questionImg = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questionImg.forEach((quest) => {
  quest.addEventListener("click", () => {
    const prevEl = quest.previousElementSibling;
    if (!prevEl) {
      quest.classList.toggle("active");
    } else if (!prevEl.classList.contains("active")) {
      quest.classList.toggle("active");
    } else {
      prevEl.classList.remove("active");
      quest.classList.toggle("active");
    }
  });
});
