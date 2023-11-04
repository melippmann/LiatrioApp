const express = require('express')
const app = express()
const port = 80
const hostname='localhost'

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
  console.log(`server running at http;//${hostname}:${port}`)
})