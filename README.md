
Search Flask is a Flask-based web application that enables searching and filtering anime using the AniList API.

Features:
Fetching anime list via the AniList GraphQL API.
Filtering anime by genres and formats.
Sorting results by popularity or rating.
Displaying the anime list as cards.

Technologies:
Python 3
Flask
JavaScript
HTML/CSS
AniList GraphQL API
PostgreSQL/MySQL (optional)

Installation and Setup
1. Clone the repository:
git clone https://github.com/arara100/Search-flask.git
cd Search-flask

2. Install dependencies:
It is recommended to use a virtual environment:
python -m venv venv
source venv/bin/activate  # for Linux/Mac
venv\Scripts\activate    # for Windows
Install dependencies:
pip install -r requirements.txt

3. Start the server:
flask run

4. Open in the browser:
Go to: http://127.0.0.1:5000
