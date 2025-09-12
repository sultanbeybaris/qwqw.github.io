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