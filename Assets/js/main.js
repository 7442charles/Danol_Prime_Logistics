document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel .hero');

  function showSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Function to automatically change slides every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);