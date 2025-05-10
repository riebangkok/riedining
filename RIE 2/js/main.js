document.addEventListener('DOMContentLoaded', () => {
    const mainLogo = document.getElementById('main-logo');
    const textLogo = document.getElementById('text-logo');
    const formContainer = document.getElementById('form-container');
    const rsvpButton = document.getElementById('rsvp-button');

    // Initial animation sequence
    setTimeout(() => {
        mainLogo.classList.add('fade-in');
    }, 500);

    // Logo transition
    setTimeout(() => {
        mainLogo.classList.add('fade-out');
        setTimeout(() => {
            textLogo.classList.add('fade-in');
        }, 500);
    }, 3000);

    // Form appearance
    setTimeout(() => {
        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateY(0)';
    }, 5000);

    // RSVP button click handler
    rsvpButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace this URL with your actual Ticketmelon link
        window.location.href = 'YOUR_TICKETMELON_LINK_HERE';
    });
});
