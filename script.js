document.addEventListener('DOMContentLoaded', function() {
    // адаптив меню
    const excursionsButton = document.querySelector('.excursions-button > a');
    const dropdown = excursionsButton.nextElementSibling;

    excursionsButton.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!excursionsButton.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });


    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.links').classList.toggle('active');
    });

    // Темна тема
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

    // Модальне вікно
    const registerCircle = document.getElementById('register-circle');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close');
    const submit = document.getElementById('submit');

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

    submit.addEventListener('click', () => {
        alert('Успішно заброньовано!');
        modal.style.display = 'none';
    });

    // Знижка
    setTimeout(() => {
        document.getElementById('discount').style.display = 'block';
    }, 12000000);

    document.getElementById('close-discount').onclick = function() {
        document.getElementById('discount').style.display = 'none';
    };
});