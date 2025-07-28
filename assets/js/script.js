// script.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
  
    toggleButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-fill");
  
    cards.forEach((card) => {
      const fill = card.querySelector(".fill-bg");
  
      card.addEventListener("mouseenter", () => {
        fill.style.height = "100%";
  
        // Ubah semua teks kecuali yang punya class no-change
        card.querySelectorAll("h4, p, div, span").forEach((el) => {
          if (!el.classList.contains("no-change")) {
            el.style.color = "white";
          }
        });
      });
  
      card.addEventListener("mouseleave", () => {
        fill.style.height = "0%";
  
        card.querySelectorAll("h4, p, div, span").forEach((el) => {
          if (!el.classList.contains("no-change")) {
            el.style.color = "";
          }
        });
      });
    });
  });

  


  
  