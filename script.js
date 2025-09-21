document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопки избранного
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    favoriteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.classList.toggle('active');
        
        // Анимация при клике
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
    
    // Обработка точек карусели
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Убираем активный класс со всех точек
            dots.forEach(d => d.classList.remove('active'));
            // Добавляем активный класс к текущей точке
            this.classList.add('active');
            
            // Здесь можно добавить логику смены изображений
            console.log(`Переключение на изображение ${index + 1}`);
        });
    });
    
    // Обработка клика по изображению товара
    const productImageLink = document.querySelector('.product-image-link');
    const productNameLink = document.querySelector('.product-name');
    
    [productImageLink, productNameLink].forEach(link => {
        link.addEventListener('click', function(e) {
            // Если кликнули по кнопке избранного, не переходим по ссылке
            if (e.target.closest('.favorite-btn')) {
                e.preventDefault();
                return;
            }
            
            // Переход на страницу товара
            console.log('Переход на страницу товара');
            // window.location.href = this.href; // Раскомментировать для реального перехода
        });
    });
});