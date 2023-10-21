const express = require('express');
const multer = require('multer');
const app = express();
const port = 3001
const path = require('path');
const routesMovie = require('./routes/Movie');
const MovieController = require('./controllers/MovieController');
const { diskStorage } = require('multer');



app.use(express.json());

app.use('/movies/:id/upload', express.static(path.join(__dirname, 'upload')));

app.use('/movies', routesMovie);


app.listen(port, () =>{
    console.log(`this port is running on http://localhost:${port}`)
});




