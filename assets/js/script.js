// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Card Fill Animation (existing functionality)
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

  // UNIFIED Mobile Navbar Toggle Script
  // Get elements with multiple possible selectors
  const mobileMenuToggle = document.getElementById("mobileMenuToggle") || document.getElementById("navToggle") || document.querySelector(".mobile-menu-toggle");

  const mobileMenu = document.getElementById("mobileMenu") || document.querySelector(".mobile-menu");

  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const body = document.body;

  // Check if elements exist
  if (!mobileMenuToggle) {
    console.log("Mobile menu toggle button not found. Checking for these IDs/classes: #mobileMenuToggle, #navToggle, .mobile-menu-toggle");
    return;
  }

  if (!mobileMenu) {
    console.log("Mobile menu not found. Checking for these IDs/classes: #mobileMenu, .mobile-menu");
    return;
  }

  console.log("Mobile menu elements found successfully");

  // Toggle mobile menu function
  function toggleMobileMenu(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("Mobile menu toggle clicked"); // Debug log

    // Toggle active class on button
    mobileMenuToggle.classList.toggle("active");

    // Toggle active class on menu
    mobileMenu.classList.toggle("active");
    mobileMenu.classList.toggle("hidden"); // Also toggle hidden class for compatibility

    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains("active")) {
      body.classList.add("menu-open");
      console.log("Menu opened");
    } else {
      body.classList.remove("menu-open");
      console.log("Menu closed");
    }
  }

  // Close mobile menu function
  function closeMobileMenu() {
    mobileMenuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    mobileMenu.classList.add("hidden"); // Add hidden class for compatibility
    body.classList.remove("menu-open");
    console.log("Menu closed");
  }

  // Add click event to toggle button
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);

  // Close menu when clicking on nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close menu on window resize if screen becomes larger
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });
});

// Alternative method using jQuery if available (keeping for compatibility)
if (typeof jQuery !== "undefined") {
  $(document).ready(function () {
    $(".mobile-menu-toggle, #mobileMenuToggle, #navToggle").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(".mobile-menu, #mobileMenu").toggleClass("active").toggleClass("hidden");
      $("body").toggleClass("menu-open");
    });

    $(".mobile-nav-link").on("click", function () {
      $(".mobile-menu-toggle, #mobileMenuToggle, #navToggle").removeClass("active");
      $(".mobile-menu, #mobileMenu").removeClass("active").addClass("hidden");
      $("body").removeClass("menu-open");
    });
  });
}
