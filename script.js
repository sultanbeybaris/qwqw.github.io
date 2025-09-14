// Динамическая стрелка для summary и плавная прокрутка к открытому аккордеону

document.querySelectorAll('.accordion summary').forEach(summary => {
    // Добавляем стрелку
    const arrow = document.createElement('span');
    arrow.className = 'accordion-arrow';
    arrow.innerHTML = '&#9654;'; // ►
    arrow.style.marginRight = '8px';
    arrow.style.transition = 'transform 0.3s';
    summary.prepend(arrow);

    // Вращаем стрелку при открытии
    summary.parentElement.addEventListener('toggle', function () {
        if (summary.parentElement.open) {
            arrow.style.transform = 'rotate(90deg)';
            // Плавная прокрутка к открытому аккордеону
            summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            arrow.style.transform = 'rotate(0deg)';
        }
    });
});
document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Анимация появления секций
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-animate');
    });

    function revealSections() {
        document.querySelectorAll('.section-animate').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();
});
document.addEventListener('DOMContentLoaded', function() {
    // --- Переключение разделов по меню ---
    const sections = {
        editor: document.getElementById('editor-section'),
        html: document.getElementById('html-section'),
        css: document.getElementById('css-section'),
        js: document.getElementById('js-section')
    };
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.onclick = function() {
            // Скрыть все разделы
            Object.values(sections).forEach(sec => sec.style.display = 'none');
            // Убрать активный класс у всех кнопок
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            // Показать выбранный раздел
            const sectionId = btn.getAttribute('data-section');
            if (sections[sectionId]) {
                sections[sectionId].style.display = '';
                btn.classList.add('active');
            }
        };
    });
    // По умолчанию показываем редактор
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    sections.editor.style.display = '';
    document.querySelector('.menu-btn[data-section="editor"]').classList.add('active');

    // ...остальной твой код...
});
document.getElementById('run-code').onclick = function() {
    const html = document.getElementById('html-code').value;
    const css = `<style>${document.getElementById('css-code').value}</style>`;
    const js = `<script>${document.getElementById('js-code').value}<\/script>`;
    const result = html + css + js;
    const frame = document.getElementById('result-frame');
    frame.srcdoc = result;
};
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // JavaScript бөліміндегі батырмаға әрекет
    const jsDemoBtn = document.getElementById('btn-js-demo');
    if (jsDemoBtn) {
        jsDemoBtn.onclick = function() {
            alert('Сәлем, әлем!');
        };
    }
});