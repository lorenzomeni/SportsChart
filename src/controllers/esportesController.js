var esporteModel = require("../models/esporteModel.js");

function pegarEsporte(req, res) {
    console.log("chegou na controller")
    esporteModel.pegarEsporte().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    pegarEsporte
}