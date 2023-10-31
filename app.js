const express = require('express')
const app = express()
const port = 3000

var jsonObj = {
    "message": "My name is Meher Lippmann",
    "timestamp": Date(),
}

console.log(jsonObj)
app.get('/', (req, res) => {
  res.send(jsonObj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})