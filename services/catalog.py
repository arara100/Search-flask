import requests
from config import Config


# Запит для отримання аніме з AniList API
def fetch_anime(sort_by):
    query = """
    query($sort: [MediaSort]) {
      Page {
        media(type:ANIME, sort: $sort) {
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          averageScore
          popularity
          format
          episodes
          genres
        }
      }
    }
    """

    variables = {
        'sort': [sort_by]
    }

    response = requests.post(Config.ANI_LIST_API_URL, json={'query': query, 'variables': variables})
    return response.json()

