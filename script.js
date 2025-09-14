
document.querySelectorAll('.accordion summary').forEach(summary => {

    const arrow = document.createElement('span');
    arrow.className = 'accordion-arrow';
    arrow.innerHTML = '&#9654;'; 
    arrow.style.marginRight = '8px';
    arrow.style.transition = 'transform 0.3s';
    summary.prepend(arrow);


    summary.parentElement.addEventListener('toggle', function () {
        if (summary.parentElement.open) {
            arrow.style.transform = 'rotate(90deg)';
        
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

    
    const jsDemoBtn = document.getElementById('btn-js-demo');
    if (jsDemoBtn) {
        jsDemoBtn.onclick = function() {
            alert('Сәлем, әлем!');
        };
    }
});