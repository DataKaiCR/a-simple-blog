const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()

//Constants
PORT = 5500;

// DB Mongo connection
mongoose.set({strictQuery: false});
mongoose.connect('mongodb://mongo:27017/blog');

//APP
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
});

app.use('/articles', articleRouter)
app.listen(PORT, () => {
    console.log('Server is running on PORT 5500')
})