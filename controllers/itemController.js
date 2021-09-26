const express = require('express')
const router = express.Router()
const Item = require('../models/items.js')
const itemSeed = require("../models/seed.js")
// router.get('/', (req, res) => {
//     res.send(items)
//       }) 
const authRequired = (req, res, next) => {
	if (req.session.currentUser) {
		next()
		
	} else {
		
		res.send('You must be logged in to do that!')
	}
}
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
    Item.create(req.body, (error, newItem)=>{
        if (error){
            res.send(error)
        }
        res.redirect('/items')
    })
     
 })
  
router.delete('/:id', (req, res)=> {
    console.log(`HERE IS REQ.SESSION.LOGGEDIN: ${req.session.loggedIn}`)
    if(req.session.loggedIn) {
        Item.findByIdAndDelete(req.params.id, (error, deletedItem)=>{
            if (error){
                res.send(error)
            }
            res.redirect('/items')
        })
    } else {
        res.send("YOU NEED TO BE LOGGED IN TO DO THAT.")
    }
   })

   router.get('/:id/edit', (req, res) => {
	console.log(`HERE IS REQ.SESSION.LOGGEDIN: ${req.session.loggedIn}`)
	if(req.session.loggedIn) {
		Item.findById(req.params.id, (error, foundItem)=>{
			if (error){
				res.send(error)
			}
			res.render('edit.ejs', {
				items: foundItem,
				indexOfItemToDelete: foundItem.id
			})
		 })
	 } else {
		 res.send("YOU NEED TO BE LOGGED IN TO DO THAT.")
	 }
})

   router.put('/:id', (req, res) => {
     Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedItem)=>{
         console.log("debug", req.body)
        if (error){
            res.send(error)
        }
        res.redirect('/items')
     })
   })

   router.put('/:id/buy', (req, res) => {
    try{
        Item.findByIdAndUpdate(req.params.id, {$inc:{qty: -1
        }}, {new: true}, (err, updatedItem) => {
            err ? res.send(err)
            : res.render('checkout.ejs')
        })       
     }
     catch (err) {
         res.send(err)
     }
 })

module.exports = router;
