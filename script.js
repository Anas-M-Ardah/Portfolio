function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
copyright.innerHTML = `Copyright &#169;  Anas Al-Ardah. ${year}  All Rights Reserved.`;

document.addEventListener("DOMContentLoaded", function() {
  function updateImageSource() {
    const jordanDentalCareImg = document.getElementById("dental-care-img");
    if (jordanDentalCareImg) {
      if (window.innerWidth < 600) {
        jordanDentalCareImg.src = "./assets/jordan-dental-care-2.png";
      } else {
        jordanDentalCareImg.src = "./assets/jordan-dental-care.png"; // Replace with the default image path
      }
    }
  }

  // Initial check
  updateImageSource();

  // Update on resize
  window.addEventListener("resize", updateImageSource);
});

