const { News } = require('../models/news.models')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createNews = (request, response) => {
    const { title, headline, body } = request.body;
    News.create({
        title,
        headline,
        body
    })
        .then(news => response.json(news))
        .catch(err => response.json(err));
}

module.exports.getAllNews = (request, response) => {
    News.find({})
        .then(news => response.json(news))
        .catch(err => response.json(err))
}

module.exports.getNews = (request, response) => {
    News.findOne({ _id: request.params.id })
        .then(news => response.json(news))
        .catch(err => response.json(err))
}

module.exports.updateNews = (request, response) => {
    News.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedNews => response.json(updatedNews))
        .catch(err => response.json(err))
}

module.exports.deleteNews = (request, response) => {
    News.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}