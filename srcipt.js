document.addEventListener('DOMContentLoaded', () => {
  
  // ==================== OBSŁUGA MENU HAMBURGERA ====================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==================== OBSŁUGA POPUPU ====================
  const promoBox = document.getElementById('promoBox');
  const promoClose = document.getElementById('promoClose');
  const promoOverlay = document.getElementById('promoOverlay');

  // Pokazywanie po 2 sekundach
  setTimeout(() => {
    if (promoBox) promoBox.classList.add('show');
    if (promoOverlay) promoOverlay.classList.add('show');
  }, 2000);

  // Zamknięcie po kliknięciu X lub w tło za okienkiem
  const closePopup = () => {
    if (promoBox) promoBox.classList.remove('show');
    if (promoOverlay) promoOverlay.classList.remove('show');
  };

  if (promoClose) promoClose.addEventListener('click', closePopup);
  if (promoOverlay) promoOverlay.addEventListener('click', closePopup);

  // ==================== OBSŁUGA SLIDERA BANERA ====================
  const slidesContainer = document.getElementById('slidesContainer');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const dots = document.querySelectorAll('.dot');

  if (!slidesContainer || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  const goToSlide = (index) => {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      resetAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      goToSlide(index);
      resetAutoSlide();
    });
  });

  const startAutoSlide = () => {
    slideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4000);
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval);
    startAutoSlide();
  };

  startAutoSlide();
});