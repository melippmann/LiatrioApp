const express = require('express')
const app = express()
const port = 3000

var jsonObj = {
    "message": "My name is Meher Lippmann",
    "timestamp": new Date(),
}

console.log(jsonObj)

app.get('/', (req, res) => {
  jsonObj.timestamp=new Date();
  res.send(jsonObj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})