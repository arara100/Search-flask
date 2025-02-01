from flask import render_template, request
from app import app

from services.catalog import fetch_anime
from services.popular import *
from services.score import *
from services.trending import *


@app.route('/')
def index():
    popular_list = popular_top()
    top_list = score_top()
    trending_list = trending_top()
    return render_template('index.html', popular_list=popular_list, top_list=top_list, trending_list=trending_list)


@app.route('/catalog', methods=['GET', 'POST'])
def catalog():
    sort_option = 'SCORE_DESC'
    if request.method == 'POST':
        sort_option = request.form.get('sort_option')

    anime_data = fetch_anime(sort_option)
    anime_list = anime_data['data']['Page']['media']

    return render_template('catalog.html', anime_list=anime_list, sort_option=sort_option)


@app.route('/forum')
def forum():
    return render_template('forum.html')


@app.route('/popular')
def popular():
    popular_list = popular_page()
    return render_template('popularpage.html', popular_list=popular_list)


@app.route('/score')
def score():
    score_list = score_page()
    return render_template('scorepage.html', score_list=score_list)
