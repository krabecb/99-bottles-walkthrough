//REQUIREMENTS AND VARIABLE SETUP
const express = require('express')
//Creates instance of Express
const app = express()
const PORT = 3000

//ROUTES
//'/' by itself is a reference to the root URL path. In this case, it is localhost:3000
//Optional parameters are defined by including a '?' at the end
app.get('/:bottles?/:number_of_bottles?', (req, res) => {
    //Check if number of bottles is at 0. Recall that req.params.number_of_bottles is initially a string 
    //because it is comes from the URL path, which is a string.
    //Check if bottles and number_of_bottles are undefined. This would mean the URL path is just localhost:3000. 
    //If that's true, then display correct link.
    //NOTE: This does not address if a user typed in localhost:3000/bottles/. There would need to be an edge case for this,
    //but this is not part of the deliverable.
    if (
        (req.params.number_of_bottles === '0') ||  
        ((req.params.bottles === undefined) && (req.params.number_of_bottles === undefined))
        ) {
        res.send('<a href="/bottles/99">99 bottles on the wall</a>')
    } else {
        //req.params.number_of_bottles - 1 works because JS converts the expression to a number
        res.send(`
        <h1>${req.params.number_of_bottles} bottles on the wall</h1>
        <a href="/bottles/${req.params.number_of_bottles - 1}">${req.params.number_of_bottles - 1} bottles on the wall</a>
        `)
    }
})

//SERVER
app.listen(PORT, () => {
    console.log("Server is running!")
})