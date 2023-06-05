//these 5 will ALWAYS be at the top of our server file 

const express = require(`express`)
const cors = require(`cors`)
const app = express() //this envokes express and will return an obj that has custom functions we can use 

app.use(cors()) //tells it to utilize the cors package 
app.use(express.json())  //allows the computer to convert Json formatting in our JS 

const inventory =['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']
//acts as our inventory for this demo 

app.get(`/api/inventory`, (req, res) =>{  //this is to pull all inventory with first button
    if(req.query.item){    
        let items = req.query.item.split(`,`)             //this if statement checks for an input query and will make a specific action if it does
        let filteredItem = inventory.filter(e => {
            for(let i=0; i< items.length; i++){
                if(e.toLowerCase() ===items[i].toLowerCase()){
                    return true
                } 
            }
        })  //filters inventory checking each value to see if it matches query item
        res.status(200).send(filteredItem)
    } else{
        res.status(200).send(inventory)
    }
})

app.get(`/api/inventory/:id`, (req, res) =>{
    let {id} = req.params 
    res.status(200).send(inventory[id])
})

app.listen(5050, () => console.log(`server running on port 5050`))
//this identifies the port we are using and uses a CB to print where it is running this has to be the last line of server.js