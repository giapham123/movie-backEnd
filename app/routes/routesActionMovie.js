const movieAction = require('../controllers/note.controller.js');
module.exports = (app) => {
    app.get('/movie/actionMovie', movieAction.getActionMovie);
    app.get('/movie/animeMovie', movieAction.getAnimeMovie);
    app.get('/movie/romanticMovie', movieAction.getRomanticMovie);
    app.get('/movie/seriesMovie', movieAction.getSeriesMovie);
}