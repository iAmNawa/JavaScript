const fs = require('fs')

/* GET BEARS */

function getBears (filepath, done) {
  fs.readFile(filepath, function(err, bears) {
    if (err) return done(err)

    fs.readFile('bears.dictionary', function(err, dict) {
      if (err) return done(err)

      compareBears(bears, dict)
    })
  })

  function compareBears (bears, dict) {
    dict = dict.toString().split('\n')
    bears = bears.toString().split('\n').filter(function (bear) {
      return dict.indexOf(bear) !== -1
    })
    done(null, bears)
  }
}

getBears('animals.txt', function (err, bears) {
  console.log(bears)
})

/* GET CATS */

function getCats (filepath, done) {
  fs.readFile(filepath, function(err, cats) {
    if (err) return done(err)

    fs.readFile('cats.dictionary', function(err, dict) {
      if (err) return done(err)

      compareCats(cats, dict)
    })
  })

  function compareCats (cats, dict) {
    dict = dict.toString().split('\n')
    cats = cats.toString().split('\n').filter(function (cat) {
      return dict.indexOf(cat) !== -1
    })
    done(null, cats)
  }
}

getCats('animals.txt', function (err, cats) {
  console.log(cats)
})
