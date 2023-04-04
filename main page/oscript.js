window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);
});

const whatsappLink = document.querySelector('.whatsapp-link');

whatsappLink.addEventListener('mouseover', () => {
    whatsappLink.style.backgroundColor = 'yellow';
});

whatsappLink.addEventListener('mouseout', () => {
    whatsappLink.style.backgroundColor = '';
});

