var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkusuario/fkesporte", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkusuario/:fkesporte", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;