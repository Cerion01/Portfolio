document.querySelector('.scroll-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});