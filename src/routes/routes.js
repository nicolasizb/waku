const { Router } = require("express");

const router =  Router()

router.get('/', (req, res) => {
    res.status(200).json({message: "Welcome"})
})

router.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = 'your_verify_token';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
  
    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
          console.log('WEBHOOK_VERIFIED');
          res.status(200).send(challenge);
        } else {
          res.sendStatus(403);
        }
    }
});

router.post('/webhook', (req, res) => {
    console.log('POST /webhook received:', req.body);
    res.sendStatus(200);
});

module.exports = router