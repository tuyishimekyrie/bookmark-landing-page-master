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

const featuresId = document.querySelectorAll('[data-id]')
const featured = document.querySelectorAll('.feature')
featuresId.forEach((features) => {
  features.addEventListener('click', () => {
    const dataId = features.dataset.id
    const data = document.getElementById(dataId)
    const prevEl = features.previousElementSibling
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
        pre.classList.remove('active')
        data.classList.toggle("active");
        prevFeature.classList.remove("active");
        features.classList.toggle("active");
        // console.log(prevEl);
      }
    });
    // console.log(data)
  })
})
// console.log(featuresId)


// document.addEventListener('click', (e) => {
//     const feature = document.querySelectorAll('[data-id')
//     const featureid = e.target.matches("[data-id");
//     const fId = e.target.closest('[data-id]')
//     const featureDesc = document.querySelectorAll('.feature')
//         // console.log(featureDesc)
//     fId.addEventListener('click', () => {
//         if (!featureid && e.target.closest("[data-id]") != null)
//           return;
//    let currentFeature;
//    if (featureid) {
//      currentFeature = e.target.closest("[data-id]");
//      // console.log(currentDropdown)
//        currentFeature.classList.toggle("active");
//     //    featureDesc.forEach(add => {
//     //        add.classList.toggle('active')
//     //    })
//    }
//    document.querySelectorAll("[data-id].active").forEach((feat) => {
//      if (feat === currentFeature) return;
//      feat.classList.remove("active");
//    });
//     })
// })

// FAQ

const questionImg = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questionImg.forEach((quest) => {
  quest.addEventListener("click", () => {
    const prevEl = quest.previousElementSibling;
    if (!prevEl) {
      quest.classList.toggle('active')
    } else if (!prevEl.classList.contains('active')) {
      quest.classList.toggle('active')
    } else {
      prevEl.classList.remove('active');
      quest.classList.toggle('active')
    }
})})
