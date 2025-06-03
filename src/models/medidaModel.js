var database = require("../database/config");

function buscarUltimasMedidas(idEsporte) {

    var instrucaoSql = `select u.nome, e.nome, u.qtdHorasU from usuario as u
join media as m on m.fkUsuario = u.idusuario
join esporte as e on e.idesporte = m.fkEsporte where e.idesporte = ${idEsporte};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkusuario) {

    var instrucaoSql = `select u.nome, e.nome, u.qtdHorasU from usuario as u
join media as m on m.fkUsuario = u.idusuario
join esporte as e on e.idesporte = m.fkEsportewhere m.fkUsuario = ${fkusuario} `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
