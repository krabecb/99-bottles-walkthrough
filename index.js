const express = require('express')
const app = express()
const PORT = 3000

// '/' by itself is a reference to the localhost that we setup in the URL - in this case it is localhost:3000
app.get('/:bottles?/:number_of_bottles?', (req, res) => {
    if (
        (req.params.number_of_bottles === '0') ||  
        ((req.params.bottles === undefined) && (req.params.number_of_bottles === undefined))
        ) {
        res.send('<a href="/bottles/99">99 bottles on the wall</a>')
    } else {
        res.send(`
        <h1>${req.params.number_of_bottles} bottles on the wall</h1>
        <a href="/bottles/${req.params.number_of_bottles - 1}">${req.params.number_of_bottles - 1} bottles on the wall</a>
        `)
    }
})

app.listen(PORT, () => {
    console.log("Server is running!")
})