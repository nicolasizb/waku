const { Router } = require("express");

const router =  Router()

router.get('/', (req, res) => {
    res.status(200).json({message: "Welcome"})
})

router.get('/webhook', (req, res) => {
    res.status(200).json({message: "WEBHOOK"})
})

router.post('/webhook', (req, res) => {
    const data = req.body
    console.log("Datos recibidos", data)

    res.status(200).send('Webhook recibido');
})

module.exports = router