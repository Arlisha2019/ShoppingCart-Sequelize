const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const models = require('./models')
const bodyParser = require('body-parser')
const port = 3000
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/shopping-list', function(req, res) {
  res.render('shopping-list')
})
app.get('/add-grocery', function(req, res) {
  res.render('add-grocery')
})

app.post('/add-storeinfo', function(req, res) {

  let storeName = req.body.storeName
  let storeLocation = req.body.storeLocation

  let store = models.storeInfo.build({
    storeName: storeName,
    storeLocation: storeLocation
  })
  store.save().then(function(){
    res.render('add-grocery', { store: store} )
  })

})


app.listen(port, function(req, res){
  console.log("Welcome another day of coding...")
})
