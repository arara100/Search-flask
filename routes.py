from flask import render_template, request
from app import app

from services.catalog import anime_page
from services.popular import *
from services.score import *
from services.trending import *


@app.route('/')
def index():
    popular_list = popular_top()
    top_list = score_top()
    trending_list = trending_top()
    return render_template('index.html', popular_list=popular_list, top_list=top_list, trending_list=trending_list)


@app.route('/catalog')
def catalog():
    anime_list = anime_page()
    return render_template('catalog.html', anime_list=anime_list)


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
