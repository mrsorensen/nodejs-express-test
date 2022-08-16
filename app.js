const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: Math.floor(Math.random() * 10000) })
})

app.listen(8080, () => {
  console.log('Server running')
})
