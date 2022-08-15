const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Working' })
})

app.listen(300, () => {
  console.log('Server running')
})
