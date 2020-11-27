const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Back off u bitch')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
// setTimeout(process.kill(process.pid, 'SIGTERM'), 3000);
