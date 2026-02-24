// script.js

// Переключение темы
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохранённую тему в localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    toggleButton.textContent = '☀️ Светлая тема';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = '☀️ Светлая тема';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 Тёмная тема';
        localStorage.setItem('theme', 'light');
    }
});

// Автоматическое обновление года в подвале
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}