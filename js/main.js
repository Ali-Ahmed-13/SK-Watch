let watch1 = document.querySelector("#watch1");
let watch2 = document.querySelector("#watch2");

window.onload = () => {
  watch1.style.right = "-100px";
  watch2.style.left = "-100px";
};

window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 70) {
    watch1.style.right = "30%";
    watch2.style.left = "30%";
  } else {
    watch1.style.right = "-100px";
    watch2.style.left = "-100px";
  }

  // التحكم في nav-pro بناءً على التمرير
  if (scrollTop >= 2610 && scrollTop <= 3650) {
    nav_pro.classList.remove("none");
  } else {
    nav_pro.classList.add("none");
  }
};

let gold_btn = document.querySelector("#gold");
let black_btn = document.querySelector("#black");
let gold_box = document.querySelector(".gold-box");
let black_box = document.querySelector(".black-box");
let nav_pro = document.querySelector(".nav-pro");
let shop = document.querySelector(".shop");

function showProduct(type) {
  if (type === "gold") {
    gold_box.style.display = "flex";
    black_box.style.display = "none";
  } else {
    gold_box.style.display = "none";
    black_box.style.display = "flex";
  }
  window.scrollTo({ top: 3300, behavior: "smooth" });
  nav_pro.classList.remove("none");
  shop.style.marginTop = "360px";
}

document.addEventListener("DOMContentLoaded", () => {
  gold_btn.addEventListener("click", () => showProduct("gold"));
  black_btn.addEventListener("click", () => showProduct("black"));
});

let home = document.querySelector("header ul li:nth-child(1)");
home.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// زرار الـ nav-pro
document.querySelector(".nav-pro ul li .gold").addEventListener("click", () => showProduct("gold"));
document.querySelector(".nav-pro ul li .black").addEventListener("click", () => showProduct("black"));

// التعامل مع نافذة الشراء
const shopOverlay = document.querySelector(".shop-ovfl");
const buyButtons = document.querySelectorAll(".buy");
const confirmBuyButton = shopOverlay.querySelector("button:first-of-type");
const cancelButton = shopOverlay.querySelector("button:last-of-type");
const thanks = document.querySelector(".thanks");
const cancelBtn = document.querySelector(".thanks .cancel");

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    shopOverlay.classList.remove("none");
  });
});

cancelButton.addEventListener("click", () => {
  shopOverlay.classList.add("none");
});

confirmBuyButton.addEventListener("click", () => {
  shopOverlay.classList.add("none");
  thanks.classList.remove("none");
});

cancelBtn.addEventListener("click", () => {
  thanks.classList.add("none");
});

// ☑️ زر القائمة للموبايل
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("header ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
