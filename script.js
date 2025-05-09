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

function fadeIn(el, duration) {
  if (el.classList.contains('logo-img')) {
    el.classList.add('fade-in');
    el.style.display = '';
    return;
  }
  el.style.opacity = 0;
  el.style.display = '';
  el.style.transition = `opacity ${duration}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
}

function fadeOut(el, duration) {
  el.style.transition = `opacity ${duration}ms`;
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = 'none';
    if (el.classList.contains('logo-img')) {
      el.classList.remove('fade-in');
    }
  }, duration);
}

function moveUp(el, distance, duration) {
  el.style.transition = `transform ${duration}ms`;
  el.style.transform = `translateY(-${distance}px)`;
}

function fadeInFromBelow(el, distance, duration) {
  el.style.opacity = 0;
  el.style.transform = `translateY(${distance}px)`;
  el.style.display = '';
  el.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  }, 10);
}

window.onload = () => {
  // 1. Logo fades in
  logo.style.display = '';
  fadeIn(logo, logoFadeInDuration);

  // 2. Logo fades out, then text logo fades in
  setTimeout(() => {
    fadeOut(logo, logoFadeOutDuration);
    setTimeout(() => {
      textLogo.style.display = '';
      textLogo.style.opacity = 0;
      fadeIn(textLogo, textLogoFadeInDuration);

      // 3. Text logo moves up, form fades in from below
      setTimeout(() => {
        moveUp(textLogo, 60, textLogoMoveUpDuration);
        setTimeout(() => {
          fadeInFromBelow(form, 40, formFadeInDuration);
        }, textLogoMoveUpDuration - 200);
      }, textLogoFadeInDuration + 200);
    }, logoFadeOutDuration - 200);
  }, logoFadeInDuration + logoDisplayDuration);
};

// Initial state for animation
logo.style.opacity = 0;
logo.style.display = 'none';
textLogo.style.opacity = 0;
textLogo.style.transform = 'translateY(0)';
form.style.opacity = 0;
form.style.transform = 'translateY(40px)';
form.style.display = 'none'; 