var express = require("express");
var router = express.Router();

var esporteController = require("../controllers/esportesController.js");

router.post("/pegarEsporte", function (req, res) {
    esporteController.pegarEsporte(req, res);
})

module.exports = router;