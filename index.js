const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, '/dist')))
app.use('/js', express.static(path.resolve(__dirname, '/dist/js')))

const PORT = process.env.PORT || 3005
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('——-•--—————————————————————————————————————————————————--- •')
  console.log(`Local System Development Server is listening on port ${PORT}`)
  console.log('•- --——————————————————————————————- • -———————————————————-')
})
