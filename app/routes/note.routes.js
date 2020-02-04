
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const auth = require('../controllers/auth.js');
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

    app.get('/notes/:noteId', notes.findOne);

    app.put('/notes/:noteId', notes.update);

    app.delete('/notes/:noteId', notes.delete);

    app.post('/notes/count', notes.CountUserViews);

    app.post('/notes/searchMovie', notes.searchMovie);

    app.use('/', auth.ensureToken)

    app.post('/notes',upload.single('file'), notes.create);

}