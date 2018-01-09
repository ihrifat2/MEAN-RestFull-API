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

### Genre

Index | HTTP Method | API Endpoint
----------|----------|----------
1 | GET | /api/genres
2 | GET | /api/genres/{{genres_id}}
3 | POST | /api/genres
4 | PUT | /api/genres/{{genres_id}}
5 | DELETE | /api/genres/{{genres_id}}

### Book

Index | HTTP Method | API Endpoint
----------|----------|----------
1 | GET | /api/books
2 | GET | /api/books/{{books_id}}
3 | POST | /api/books
4 | PUT | /api/books/{{books_id}}
5 | DELETE | /api/books/{{books_id}}

## Genre

### 1 => Get all genres

/api/genres

Example: site.com/api/genres

```json
[{"_id":"5a3c9a40f0a4d6d33d2ecb56","name":"Suspense","create_date":"2018-01-09T04:13:35.006Z"},{"_id":"5a3c9a59f0a4d6d33d2ecb57","name":"Self Help","create_date":"2018-01-09T04:13:35.008Z"},{"_id":"5a4c5c0ff2303d14e4a837c4","name":"Thriller","__v":0,"create_date":"2018-01-03T04:29:03.982Z"}]
```

### 2 => Get Single genres

/api/genres/{{genres_id}}

Example: site.com/api/genres/5a3c9a40f0a4d6d33d2ecb56

```json
{"_id":"5a3c9a40f0a4d6d33d2ecb56","name":"Suspense","create_date":"2018-01-09T04:34:55.547Z"}
```


## Book

### 1 => Get all books

/api/books

Example: site.com/api/books

```json
[{"_id":"5a4bd543050ab45f9b273a3b","title":"Tasty Latest and Greatest","genre":"cooking","description":"Tasty Buzzfeed is the popular cooking brand, delivers both comforting and healthy weeknight dinners for meat-lovers, vegetarians, and vegans alike, plus treats like ice cream, chocolate desserts, and rainbow recipes galore. You’ve been mesmerized by their top-down recipe videos, but there is still something about having a tangible album of edible deliciousness at your fingertips.\n\nTasty Buzzfeed is the popular cooking brand, delivers both comforting and healthy weeknight dinners for meat-lovers, vegetarians, and vegans alike, plus treats like ice cream, chocolate desserts, and rainbow recipes galore. You’ve been mesmerized by their top-down recipe videos, but there is still something about having a tangible album of edible deliciousness at your fingertips.\n\nTasty Buzzfeed is the popular cooking brand, delivers both comforting and healthy weeknight dinners for meat-lovers, vegetarians, and vegans alike, plus treats like ice cream, chocolate desserts, and rainbow recipes galore. You’ve been mesmerized by their top-down recipe videos, but there is still something about having a tangible album of edible deliciousness at your fingertips.","author":"Tasty","publisher":"Potter/TenSpeed/Harmony","pages":"480","image_url":"https://prodimage.images-bn.com/pimages/9780525575641_p0_v2_s550x406.jpg","buy_url":"https://www.barnesandnoble.com/w/tasty-latest-and-greatest-tasty/1127329974?ean=9780525575641#/","create_date":"2018-01-09T04:35:49.724Z"},{"_id":"5a4dc4de5b4b270bc811674d","title":"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future","author":"Ashlee Vance","genre":"Other","publisher":"HarperAudio","description":"In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers.\n\nElon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.","image_url":"https://images-na.ssl-images-amazon.com/images/I/51IQzkj0%2BNL._AA300_.jpg","buy_url":"https://www.amazon.com/gp/product/B00UVY52JO/ref=s9_acsd_top_hd_bw_bj8V_c_x_4_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=Q9EA30T7299P9A53MP4P&pf_rd_t=101&pf_rd_p=c198e32e-5978-5ec5-ac13-3ed917d64732&pf_rd_i=173507","__v":0,"create_date":"2018-01-04T06:08:30.633Z"}]
```

### 2 => Get Single books

/api/books/{{books_id}}

Example: site.com/api/books/5a4dc4de5b4b270bc811674d

```json
{"_id":"5a4dc4de5b4b270bc811674d","title":"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future","author":"Ashlee Vance","genre":"Other","publisher":"HarperAudio","description":"In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers.\n\nElon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.","image_url":"https://images-na.ssl-images-amazon.com/images/I/51IQzkj0%2BNL._AA300_.jpg","buy_url":"https://www.amazon.com/gp/product/B00UVY52JO/ref=s9_acsd_top_hd_bw_bj8V_c_x_4_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=Q9EA30T7299P9A53MP4P&pf_rd_t=101&pf_rd_p=c198e32e-5978-5ec5-ac13-3ed917d64732&pf_rd_i=173507","__v":0,"create_date":"2018-01-04T06:08:30.633Z"}
```
