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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

        // Тут можна додати функціонал для обробки даних, наприклад, відправити їх на сервер
        console.log(`Ім'я: ${firstName}, Прізвище: ${lastName}, Номер телефону: ${phone}`);

        alert('Реєстрація успішна!');
        form.reset();
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