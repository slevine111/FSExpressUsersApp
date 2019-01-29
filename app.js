const express = require('express')
const generateHTML = require('./views/BaseHTML')

const app = express()

const PORT = 1337

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(generateHTML(''))
})

app.get('/users', (req, res) => {
  res.send(
    generateHTML(`
  <ul>
  <li><a href="/users/1">Moe</a></li>
  <li><a href="/users/2">Larry</a></li>
  <li><a href="/users/3">Curly</a></li>
  </ul>`)
  )
})
app.get('/users/:id', (req, res) => {
  const username =
    Number(req.params.id) === 1
      ? 'Moe'
      : Number(req.params.id) === 2
      ? 'Larry'
      : 'Curly'
  res.send(generateHTML(`<div> ${username} </div>`))
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
