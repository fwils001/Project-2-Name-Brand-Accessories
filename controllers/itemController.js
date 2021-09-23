const express = require('express')
const app = express()
const port = 3000

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({extended: false}))

const items = require('./models/items.js')
console.log(items)

app.get('/', (req, res) => {
    res.send(items)
})

app.get('/items', (req, res) => {
    res.render('index.ejs', {
        items: items
    })
})

app.get('/items/new',(req, res) => {
    res.render('new.ejs')
  })

app.get('/items/:id', (req, res) => {
    console.log(items[req.params.id])
    res.render("show.ejs", {
        items: items[req.params.id],
        itemId: req.params.id

    })
})

app.post('/items', (req, res) =>{
    
    const itemToAdd = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        price: req.body.price
    }

    items.push(itemToAdd)

    res.redirect('/items')
})

app.delete('/items/:id', (req, res)=> {
  
   const indexOfItemToDelete = items[req.params.id]
    
    items.splice(indexOfItemToDelete, 1)

    console.log(indexOfItemToDelete)
    
    res.redirect('/items')
  })


app.get('/items/:id/edit', (req, res) => {
    console.log(req.params.id)
    const itemToEdit = items[req.params.id]
    res.render('edit.ejs', {
      name: req.params.id.name,
      img: req.params.id.img,
      items: itemToEdit,
      indexOfItemToDelete: req.params.id
     })
  })

  app.put('/item/:id', (req, res) => {
    const updatedItem = {
      name: req.body.name
  
    }
    items[req.params.id] = updatedItems
    
  
    res.redirect('/items')
  })
 


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
