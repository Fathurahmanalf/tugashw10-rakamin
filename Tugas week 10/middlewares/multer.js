const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "upload"));
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  


  // const middlewares = multer({ storage: diskStorage });
  // app.put('/upload', middlewares.single('photo'), (req, res) => {
  //   // Logika untuk menangani pengunggahan file di sini
  //   if (req.file) {
  //     // File telah berhasil diunggah
  //     res.status(200).json({
  //       message: 'File berhasil diunggah.',
  //       filename: req.file.filename,
  //     });
  //   } else {
  //     // Tidak ada file yang diunggah
  //     res.status(400).json({
  //       message: 'Tidak ada file yang diunggah.',
  //     });
  //   }
  // });