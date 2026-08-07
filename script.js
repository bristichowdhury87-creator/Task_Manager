console.log(document);
const toggleBtn = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('nav a');
toggleBtn.addEventListener('click', function(){
    navLinks.forEach(function(link) {
        link.classList.toggle('show');
    });
});
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully! (This is a demo — no real backend yet.)');
    form.reset();
});
const resumeBtn = document.querySelector('#Resume button');

resumeBtn.addEventListener('click', function() {
    window.open('resume.pdf', '_blank');
});