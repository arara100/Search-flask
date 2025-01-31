document.addEventListener('DOMContentLoaded', function() {
    // Обробка натискання на кнопку жанрів
    const genreBtn = document.getElementById('genreBtn');
    const genreMenu = document.getElementById('genreMenu');
    const genreCheckboxes = document.querySelectorAll('.genre');

    genreBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Запобігаємо спрацьовуванню обробника на document
        genreMenu.classList.toggle('show');
    });

    // Оновлюємо текст кнопки після вибору жанру
    genreCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateGenreButton);
    });

    function updateGenreButton() {
        const selectedGenres = Array.from(genreCheckboxes).filter(checkbox => checkbox.checked);
        if (selectedGenres.length === 0) {
            genreBtn.textContent = 'Виберіть жанр';
        } else {
            const firstGenre = selectedGenres[0].value;
            genreBtn.textContent = firstGenre + (selectedGenres.length > 1 ? ` (+${selectedGenres.length - 1})` : '');
        }
    }

    // Обробка натискання на кнопку тегів
    const tagBtn = document.getElementById('tagBtn');
    const tagMenu = document.getElementById('tagMenu');
    const tagCheckboxes = document.querySelectorAll('.tag');

    tagBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        tagMenu.classList.toggle('show');
    });

    // Оновлюємо текст кнопки після вибору тегів
    tagCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateTagButton);
    });

    function updateTagButton() {
        const selectedTags = Array.from(tagCheckboxes).filter(checkbox => checkbox.checked);
        if (selectedTags.length === 0) {
            tagBtn.textContent = 'Виберіть теги';
        } else {
            const firstTag = selectedTags[0].value;
            tagBtn.textContent = firstTag + (selectedTags.length > 1 ? ` (+${selectedTags.length - 1})` : '');
        }
    }

    // Обробка натискання на кнопку форматів
    const formatBtn = document.getElementById('formatBtn');
    const formatMenu = document.getElementById('formatMenu');
    const formatRadios = document.querySelectorAll('.format');

    formatBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        formatMenu.classList.toggle('show');
    });

    // Оновлюємо текст кнопки після вибору формату
    formatRadios.forEach(function(radio) {
        radio.addEventListener('change', updateFormatButton);
    });

    function updateFormatButton() {
        const selectedFormats = Array.from(formatRadios).filter(radio => radio.checked);
        if (selectedFormats.length === 0) {
            formatBtn.textContent = 'Виберіть формат';
        } else {
            const firstFormat = selectedFormats[0].value;
            formatBtn.textContent = firstFormat + (selectedFormats.length > 1 ? ` (+${selectedFormats.length - 1})` : '');
        }
    }

    // Закриття меню при кліку поза ним
    document.addEventListener('click', function(event) {
        if (!genreMenu.contains(event.target) && event.target !== genreBtn) {
            genreMenu.classList.remove('show');
        }
        if (!tagMenu.contains(event.target) && event.target !== tagBtn) {
            tagMenu.classList.remove('show');
        }
        if (!formatMenu.contains(event.target) && event.target !== formatBtn) {
            formatMenu.classList.remove('show');
        }
    });
});
