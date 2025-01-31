async function fetchTags() {
    const query = `
        query {
            MediaTagCollection {
                category
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
    return [...new Set(data.data.MediaTagCollection.map(tag => tag.category))];
}

async function populateTags() {
    const tags = await fetchTags();
    const tagMenu = document.getElementById('tagMenu');

    tagMenu.innerHTML = ''; // Очищаем список перед добавлением новых элементов

    tags.forEach(tag => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'tag';
        input.value = tag;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${tag}`));
        tagMenu.appendChild(label);
    });
}

populateTags();
