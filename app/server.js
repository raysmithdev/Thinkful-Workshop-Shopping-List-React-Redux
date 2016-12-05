const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const emoji = require('node-emoji')
const mongoose = require('mongoose')
const Item = require('./models/item')

mongoose.connect('mongodb://localhost:27017/shopping-list-app')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080

app.post('/create-item', (req, res) => {
  let item = new Item()
  item.name = req.body.name

  item.save(err => {
      if (err)
          res.send(err)

      Item.find((err, items) => {
            if (err)
                res.send(err);

            res.json(items);
        })
  })
})

app.listen(port);

console.log('The coffee is brewing ' + emoji.get('coffee'))
