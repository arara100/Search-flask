document.querySelectorAll('.card').forEach(function(card) {
    let timer;
    const menu = card.querySelector('.menu');

    card.addEventListener('mouseenter', function() {
        timer = setTimeout(function() {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
        }, 500); // Затримка перед появою
    });

    card.addEventListener('mouseleave', function(event) {
        clearTimeout(timer);

        // Якщо курсор не зайшов у меню, приховуємо його
        if (!menu.contains(event.relatedTarget)) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        }
    });

    menu.addEventListener('mouseleave', function() {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    });
});
