var express = require("express");
var router = express.Router();

var puxarDadosController = require("../controllers/puxarDadosController");

router.get("/puxarDadosUsuario/:idusuario", puxarDadosController.puxarDadosUsuario)