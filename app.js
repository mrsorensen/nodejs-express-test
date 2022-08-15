const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Working' })
})

app.listen(8080, () => {
  console.log('Server running')
})
