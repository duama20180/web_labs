    document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    const themeSlider = document.getElementById('theme-slider');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSlider.checked = true;
    }

    themeSlider.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
});


    const registerCircle = document.getElementById('register-circle');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close');

    registerCircle.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
/*
    const video = document.getElementById('video');
    const discountModal = document.getElementById('discount-content');
    const closeDiscount = document.getElementById('close-discount');

    video.addEventListener('ended', () => {
        discountModal.style.display = 'block';
    });

    closeDiscount.addEventListener('click', () => {
        discountModal.style.display = 'none';
    });*/

    setTimeout(() => {
        document.getElementById('discount').style.display = 'block';
    }, 120000);

    // Закрити вікно з промокодом
    document.getElementById('close-discount').onclick = function() {
        document.getElementById('discount').style.display = 'none';
    }



















    