const express = require('express')
const fs = require('fs')
const path = require('path')
const presetTheme = require('./presetTheme')

const writeFile = (themes) => {
  fs.writeFileSync(
    path.resolve(__dirname, 'userTheme.json'),
    JSON.stringify(themes, null, 2),
    'utf8',
  )
}

if (!fs.existsSync(path.resolve(__dirname, 'userTheme.json'))) {
  writeFile({})
}

const userTheme = require('./userTheme')

const app = express()

const port = process.env.PORT || 9000

app.use(express.json())

app.get('/api/theme', (req, res) => {
  const themes = Object.assign(presetTheme, userTheme)
  res.json(themes)
})

app.post('/api/theme', (req, res) => {
  const themes = Object.assign(userTheme, req.body)
  writeFile(themes)
  res.json(themes)
})

app.delete('/api/theme', (req, res) => {
  console.log(req.query)
  const { name } = req.query
  delete userTheme[name]
  writeFile(userTheme)
  res.send('success')
})

app.listen(port, () => {
  console.log(`node server start at ${port}`)
})
