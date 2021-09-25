const express = require('express')
const router = express.Router()
const Item = require('../models/items.js')
const itemSeed = require("../models/seed.js")
// router.get('/', (req, res) => {
//     res.send(items)
//       }) 
    
router.get('/', (req, res) => {
    Item.find({},(error, items)=>{
        if (error){
            res.send(error)
        }
        res.render('index.ejs', {
            items: items
        })
    }) 
      
  })
  
router.get('/new',(req, res) => {
    res.render('new.ejs')
  })

  router.get("/seed",(req, res) =>{
      Item.create(itemSeed, (error, items)=>{
          if (error){
              res.send(error)
          }
          res.redirect("/items")
      })
  })

router.get('/:id', (req, res) => {
    Item.findById(req.params.id, (error, foundItem)=>{
        if (error){
            res.send(error)
        }
        res.render("show.ejs", {
            items: foundItem
        })
    })
})
  
router.post('/', (req, res) =>{

    const itemToAdd = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        price: req.body.price
    }
     items.push(itemToAdd)

     res.redirect('/')
 })
  
router.delete('/', (req, res)=> {

    const indexOfItemToDelete = items[req.params.id]

     items.splice(indexOfItemToDelete, 1)

     console.log(indexOfItemToDelete)

     res.redirect('/items')
   })


 router.get('/:id/edit', (req, res) => {
     console.log(req.params.id)
     const itemToEdit = items[req.params.id]
     res.render('edit.ejs', {
       name: req.params.id.name,
       img: req.params.id.img,
       items: itemToEdit,
       indexOfItemToDelete: req.params.id
      })
   })


   router.put('/:id', (req, res) => {
     const updatedItem = {
       name: req.body.name

     }
     items[req.params.id] = updatedItem


     res.redirect('/items')
   })




module.exports = router;
