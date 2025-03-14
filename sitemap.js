const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPage)) {
        link.classList.add('active');
    }
});

document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('focus', () => {
        node.style.fill = '#2197F4';
    });
    node.addEventListener('blur', () => {
        node.style.fill = '#FF8200';
    });
});


document.addEventListener('DOMContentLoaded', function () {


    const portfolio = document.getElementById('portfolio');
    const sitemap = document.getElementById('sitemap');
    const team = document.getElementById('team');
    const privacyPolicy = document.getElementById('privacy-policy');
    const termsOfService = document.getElementById('terms-of-service');
    const faq = document.getElementById('faq');
    const editor = document.getElementById('editor');


    portfolio.addEventListener('click', function () {
        window.location.href = 'portfolio.html';
    });

    sitemap.addEventListener('click', function () {
        window.location.href = 'sitemap.html';
    });

    team.addEventListener('click', function () {
        window.location.href = 'team.html';
    });

    privacyPolicy.addEventListener('click', function () {
        window.location.href = 'privacy_policy.html';
    });

    termsOfService.addEventListener('click', function () {
        window.location.href = 'terms_of_service.html';
    });

    faq.addEventListener('click', function () {
        window.location.href = 'faq.html';
    });

    editor.addEventListener('click', function () {
        window.location.href = 'page_editor.html';
    });

});

