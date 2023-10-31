const express = require('express')
const app = express()
const port = 80

var jsonObj = {
    "message": "My name is Meher Lippmann",
    "timestamp": new Date().getTime()/1000,
}


app.get('/', (req, res) => {
  console.log(jsonObj)
  jsonObj.timestamp= new Date().getTime()/1000;
  res.send(jsonObj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})