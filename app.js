const express = require('express')
const generateHomeHTML = require('./views/UserhomeHTML')
const generateUsersListHTML = require('./views/UsersListHTML')
const generateUserProfileHTML = require('./views/UserProfileHTML')

const app = express()

const PORT = 1337

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(generateHomeHTML())
})

app.get('/users', (req, res) => {
  res.send(generateUsersListHTML())
})
app.get('/users/:id', (req, res) => {
  const username =
    Number(req.params.id) === 1
      ? 'Moe'
      : Number(req.params.id) === 2
      ? 'Larry'
      : 'Curly'
  res.send(generateUserProfileHTML(username))
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
