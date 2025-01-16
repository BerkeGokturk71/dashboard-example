const navLinks = document.querySelectorAll('.sidebar-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});
