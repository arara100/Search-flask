async function fetchFormats() {
    const query = `
        query {
            Media(type: ANIME) {
                format
            }
        }
    `;

    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();

    // Перевірка, чи правильно оброблені дані
    if (data && data.data && data.data.Media) {
        // Якщо Media є об'єктом, перетворюємо його в масив
        const mediaArray = Array.isArray(data.data.Media) ? data.data.Media : [data.data.Media];
        // Фільтруємо унікальні формати
        const formats = [...new Set(mediaArray.map(media => media.format))];
        return formats.filter(format => format !== null); // Фільтруємо значення null
    } else {
        console.error('Помилка в структурі даних:', data);
        return [];
    }
}

async function populateFormats() {
    const formats = await fetchFormats();
    const formatMenu = document.getElementById('formatMenu');

    formatMenu.innerHTML = ''; // Очистити меню перед додаванням нових елементів

    formats.forEach(format => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'format';
        input.value = format;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${format}`));
        formatMenu.appendChild(label);
    });
}

populateFormats();
