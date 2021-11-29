const NewsController = require('../controllers/news.controller');
module.exports = function (app) {
    app.get('/api', NewsController.index);
    app.post('/api/news', NewsController.createNews);
    app.get('/api/news', NewsController.getAllNews);
    app.get('/api/news/:id', NewsController.getNews)
    app.put('/api/news/:id', NewsController.updateNews)
    app.delete('/api/news/:id', NewsController.deleteNews)
}