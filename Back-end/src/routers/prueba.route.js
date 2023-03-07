const express = require("express")
const router = express.Router()

const PruebaCtrl = require("../controllers/prueba.controllers")

router.get('/prueba', PruebaCtrl.PruebaCtrl)

module.exports = router