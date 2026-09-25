// Pobranie elementu przycisku hamburgera z pliku HTML po jego ID
const hamburger = document.getElementById('hamburger'); // Zmienna przechowująca przycisk

// Pobranie elementu listy linków nawigacyjnych po jego ID
const navLinks = document.getElementById('navLinks'); // Zmienna przechowująca menu linków

// Nasłuchiwanie kliknięcia w przycisk hamburgera
hamburger.addEventListener('click', () => { // Wykonaj funkcję po kliknięciu
  navLinks.classList.toggle('active'); // Dodaj klasę 'active' jeśli jej nie ma, usuń jeśli jest
}); // Koniec nasłuchiwania dla hamburgera

// Pobranie wszystkich linków znajdujących się wewnątrz menu i przeiterowanie po nich
document.querySelectorAll('.nav-links a').forEach(link => { // Dla każdego linku <a> w nav-links:
  link.addEventListener('click', () => { // Dodaj nasłuchiwanie kliknięcia w dany link
    navLinks.classList.remove('active'); // Chowa menu (usuwa klasę 'active') po kliknięciu w link
  }); // Koniec funkcji obsługującej pojedynczy link
}); // Koniec pętli dla wszystkich linków