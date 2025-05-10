document.addEventListener('DOMContentLoaded', () => {
  const mainLogo      = document.getElementById('main-logo');
  const textLogo      = document.getElementById('text-logo');
  const formContainer = document.getElementById('form-container');
  const rsvpButton    = document.getElementById('rsvp-button');

  // 1) Icon fade-in
  setTimeout(() => {
    mainLogo.classList.add('fade-in');
  }, 500);

  // 2) Icon → text transition
  setTimeout(() => {
    mainLogo.classList.add('fade-out');
    setTimeout(() => {
      mainLogo.style.display = 'none';
      textLogo.classList.add('fade-in');
    }, 500); // wait for fade-out to finish
  }, 3000);

  // 3) Form slide-in
  setTimeout(() => {
    formContainer.style.opacity = '1';
    formContainer.style.transform = 'translateY(0)';
  }, 5000);

  // 4) RSVP button navigates to the correct Ticketmelon link
  rsvpButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'https://www.ticketmelon.com/riebangkok/rie00';
  });
});
