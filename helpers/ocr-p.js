var fs = require('fs'),
  config = require('config'),
  tessocr = require('ntesseract'),
  Q = require("q");



function run(filename) {
    return tesseractCA(filename);
}

function tesseractCA(filename) {

  return new Q.Promise(function (resolve, reject) {
    tessocr.process(filename, function (err, text) {
      if (err) {
        reject(err);
      } else {
        resolve(text);
      }
    });
  });

}

exports.run = run;