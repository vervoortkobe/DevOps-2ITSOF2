const express = require('express')
const app = express()
const port = 3000;
const chat = require('./chat');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  
  next();
})

app.get('/chat', (req, res) => {
  res.send('Chat API')
});

app.post('/api/chat/send', chat.send);
app.get('/api/chat/receive', chat.receive);

const server = app.listen(port, () => {
  console.log(`Chat api listening on port ${port}`)
});

process.on('SIGTERM', async () => {
  console.log('sigterm received')
  await server.close();
  process.exit(0);
});