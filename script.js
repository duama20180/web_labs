    

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'd' || event.key === 'D' || event.key === 'В'|| event.key === 'в') {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        }
    });
});
