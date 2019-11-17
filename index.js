require('dotenv').config()

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: process.env.SEEM_CHANNEL,
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

const express = require('express')
const app = express()
const p = require('phin')

app.post('/events', async (req, res) => {
    console.log("called");
    await p({
        url: process.env.CC_WEBHOOK_URL,
        method: 'POST',
        data: { 
            say: "hello"
        }
      })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
