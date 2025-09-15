document.addEventListener('DOMContentLoaded', function() {
    // Тема ауыстыру
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.onclick = function() {
            document.body.classList.toggle('dark-mode');
            this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        };
    }

    // Анимация секцияларға
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

    // Меню-вкладки
    const sections = {
        editor: document.getElementById('editor-section'),
        html: document.getElementById('html-section'),
        css: document.getElementById('css-section'),
        js: document.getElementById('js-section')
    };
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.onclick = function() {
            Object.values(sections).forEach(sec => sec.style.display = 'none');
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            const sectionId = btn.getAttribute('data-section');
            if (sections[sectionId]) {
                sections[sectionId].style.display = '';
                btn.classList.add('active');
            }
        };
    });
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    sections.editor.style.display = '';
    document.querySelector('.menu-btn[data-section="editor"]').classList.add('active');

    // Кодтау алаңы (HTML+CSS+JS)
    const runCodeBtn = document.getElementById('run-code');
    if (runCodeBtn) {
        runCodeBtn.onclick = function() {
            const html = document.getElementById('html-code').value;
            const css = `<style>${document.getElementById('css-code').value}</style>`;
            const js = `<script>${document.getElementById('js-code').value}<\/script>`;
            const result = html + css + js;
            const frame = document.getElementById('result-frame');
            frame.srcdoc = result;
        };
    }

    // JavaScript бөліміндегі батырмаға әрекет
    const jsDemoBtn = document.getElementById('btn-js-demo');
    if (jsDemoBtn) {
        jsDemoBtn.onclick = function() {
            alert('Сәлем, әлем!');
        };
    }

    // Кодты көшіру
    window.copyCode = function(selector) {
        const code = document.querySelector(selector);
        if (code) {
            navigator.clipboard.writeText(code.textContent);
            alert('Код көшірілді!');
            
        }
    };

    // Аккордион бойынша іздеу
    const searchInput = document.getElementById('search-accordion');
    if (searchInput) {
        searchInput.oninput = function() {
            const val = this.value.toLowerCase();
            document.querySelectorAll('.accordion details').forEach(d => {
                const text = d.textContent.toLowerCase();
                d.style.display = text.includes(val) ? '' : 'none';
            });
        };
    }

    // Редакторды тазарту
    const clearBtn = document.getElementById('clear-editor');
    if (clearBtn) {
        clearBtn.onclick = function() {
            document.getElementById('html-code').value = '';
            document.getElementById('css-code').value = '';
            document.getElementById('js-code').value = '';
        };
    }

    // Анимация для аккордионов
    document.querySelectorAll('.accordion details').forEach(details => {
        details.addEventListener('toggle', function() {
            const content = Array.from(details.children).find(el => el.tagName !== 'SUMMARY');
            if (details.open && content) {
                content.style.opacity = '0';
                content.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 10);
            } else if (content) {
                content.style.opacity = '0';
            }
        });
    });
});
const loader = document.getElementById('loader');
if (loader) loader.style.display = 'block';
setTimeout(() => {
    if (loader) loader.style.display = 'none';
}, 800);
document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Плавающая кнопка "Наверх"
    const toTopBtn = document.getElementById('to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    });
    toTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    toast.style.display = 'block';
    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.display = 'none';
    }, 2200);
}
const toTopBtn = document.getElementById('to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});