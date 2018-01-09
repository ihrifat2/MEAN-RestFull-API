# MEAN-RestFull-API

A simple BookStore using Restfull service

## Requirement

1. Install [Git Bash](https://git-scm.com/)
2. Install [NodeJS](https://nodejs.org/en/)
3. Install [MongoDB](https://www.mongodb.com/)

## Install 

1. Clone repository `git clone https://github.com/ihrifat2/Chat-Application-NodeJs-MongoDB.git`
2. Open git bash and type `npm install`
3. Start Mongo DB by typing `mongod` in git bash or power shell
4. then type `node app` in git bash (If you want you can install nodemon by typing `npm install -g nodemon` in gut bash)

## Usage

##Genre

Index | HTTP Method | Endpoint
----------|----------|----------
1 | GET | /api/genres
2 | GET | /api/genres/{{genres_id}}
3 | POST | /api/genres
4 | PUT | /api/genres/{{genres_id}}
5 | DELETE | /api/genres/{{genres_id}}

##Book

Index | HTTP Method | Endpoint
----------|----------|----------
1 | GET | /api/books
2 | GET | /api/books/{{books_id}}
3 | POST | /api/books
4 | PUT | /api/books/{{books_id}}
5 | DELETE | /api/books/{{books_id}}