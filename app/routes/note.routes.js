
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const auth = require('../controllers/auth.js');
    const comment = require('../controllers/commentController.js');
    const seriesMovie = require('../controllers/seriesMovieController.js');
    const multer = require('multer');
    const fileFilter = (req, file, cb) => {
        const allowedFile = ["image/png"];
        cb(null, true)

    }
    const storage = multer.diskStorage({
        destination: './app/thumnails/',
        filename: function (req, file, cb) {
            // null as first argument means no error
            cb(null, Date.now() + '-' + file.originalname)
        }
    
    })
    const upload = multer({
        storage: storage,
        fileFilter, limits: { fileSize: 500000 },
      
        
    })

    app.post('/auth', auth.authJwt1);
     
    app.get('/notes', notes.findAll);

    app.get('/notes/dataplaylist', notes.findMovieForPlaylist);

    app.post('/notes/count', notes.CountUserViews);

    app.post('/notes/searchMovie', notes.searchMovie);

    app.post('/movie/comment', comment.SaveComments);

    app.post('/movie/getComment', comment.loadingComment);

    // app.use('/', auth.ensureToken)

    app.post('/notes',upload.single('file'), notes.create);
    app.post('/movie/series', seriesMovie.addSeriesMoive);
    

}