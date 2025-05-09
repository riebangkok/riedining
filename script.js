// Animation timing (in ms)
const logoFadeInDuration = 1200;
const logoDisplayDuration = 1000;
const logoFadeOutDuration = 800;
const textLogoFadeInDuration = 1000;
const textLogoMoveUpDuration = 700;
const formFadeInDuration = 800;

const logo = document.getElementById('logo');
const textLogo = document.getElementById('text-logo');
const form = document.getElementById('rsvp-form');
const rsvpBtn = document.getElementById('rsvp-btn');

// Set RSVP button link (replace with your Ticketmelon link)
const ticketmelonUrl = 'https://www.ticketmelon.com/your-event';
rsvpBtn.onclick = (e) => {
  e.preventDefault();
  window.open(ticketmelonUrl, '_blank');
};

window.onload = () => {
  // 1. Logo fades in
  logo.style.display = '';
  logo.style.opacity = 0;
  logo.style.transition = `opacity ${logoFadeInDuration}ms`;
  setTimeout(() => {
    logo.style.opacity = 1;
  }, 10);

  // 2. Logo fades out, then text logo fades in
  setTimeout(() => {
    logo.style.transition = `opacity ${logoFadeOutDuration}ms`;
    logo.style.opacity = 0;
    setTimeout(() => {
      logo.style.display = 'none';
      textLogo.style.display = '';
      textLogo.classList.add('fade-in');
      // 3. Text logo moves up, form fades in from below
      setTimeout(() => {
        textLogo.classList.add('move-up');
        setTimeout(() => {
          form.style.display = '';
          setTimeout(() => {
            form.classList.add('fade-in');
          }, 10);
        }, textLogoMoveUpDuration - 200);
      }, textLogoFadeInDuration + 200);
    }, logoFadeOutDuration - 200);
  }, logoFadeInDuration + logoDisplayDuration);
};

// Initial state for animation
logo.style.opacity = 0;
textLogo.classList.remove('fade-in', 'move-up');
textLogo.style.opacity = 0;
textLogo.style.transform = 'translateY(0)';
form.classList.remove('fade-in');
form.style.opacity = 0;
form.style.transform = 'translateY(40px)';
form.style.display = 'none'; 