import requests
from config import Config


# Запит для отримання аніме з AniList API
def anime_page(sort_by="SCORE_DESC"):
    QUERY = '''
    {
      Page(page: 1, perPage: 50) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          averageScore
          episodes
          genres
        }
      }
    }
    '''
    response = requests.post(Config.ANI_LIST_API_URL, json={'query': QUERY})
    data = response.json()
    return data['data']['Page']['media']

