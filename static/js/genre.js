async function fetchGenres() {
    const query = `
        query {
            GenreCollection
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
    return data.data.GenreCollection;
}

async function populateGenres() {
    const genres = await fetchGenres();
    const genreMenu = document.getElementById('genreMenu');

    genres.forEach(genre => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'genre';
        input.value = genre;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${genre}`));
        genreMenu.appendChild(label);
    });
}

populateGenres();
