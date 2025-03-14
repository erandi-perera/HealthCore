const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPage)) {
        link.classList.add('active');
    }
});

document.getElementById('scrollNext').addEventListener('click', function () {
    var gallery = document.querySelector('.gallery');
    gallery.scrollBy({ left: gallery.offsetWidth / 2, behavior: 'smooth' });
});

document.getElementById('scrollPrev').addEventListener('click', function () {
    var gallery = document.querySelector('.gallery');
    gallery.scrollBy({ left: -gallery.offsetWidth / 2, behavior: 'smooth' });
});

function showExtendedView(thumbnail) {
    const src = thumbnail.querySelector('img').src;
    const alt = thumbnail.querySelector('img').alt;
    const description = thumbnail.dataset.description.replace(/\\n/g, '<br><br>');

    const extendedView = document.getElementById('extendedView');
    const footer = document.querySelector('footer');
    document.getElementById('extendedImage').src = src.replace('thumbnail', 'large');
    document.getElementById('extendedImage').alt = alt;
    document.getElementById('imageDescription').innerHTML = description;

    extendedView.classList.remove('hidden');

    extendedView.insertAdjacentElement('afterend', footer);
    extendedView.scrollIntoView({ behavior: 'smooth', block: 'center' });

}



function closeExtendedView() {
    const extendedView = document.getElementById('extendedView');
    const footer = document.querySelector('footer');
    const galleryContainer = document.querySelector('.gallery-container');

    extendedView.classList.add('hidden');

    galleryContainer.insertAdjacentElement('afterend', footer);
}

function changeBackgroundColor(color) {
    document.getElementById('extendedView').style.backgroundColor = color;
}

function changeFontStyle(font) {
    document.getElementById('extendedView').style.fontFamily = font;
}

function changeFontColor(color) {
    document.getElementById('imageDescription').style.color = color;
}

let currentFontSize = 16; // You can adjust this base size

function increaseFontSize() {
    currentFontSize += 2; // Increase font size by 2px
    applyFontSize();
}

function decreaseFontSize() {
    currentFontSize = Math.max(12, currentFontSize - 2);
    applyFontSize();
}

function applyFontSize() {
    document.getElementById('imageDescription').style.fontSize = `${currentFontSize}px`;
}

// Event listeners for your A+ and A- buttons
document.getElementById('increaseFontSize').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFontSize').addEventListener('click', decreaseFontSize);




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

