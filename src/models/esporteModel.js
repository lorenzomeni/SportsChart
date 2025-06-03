var database = require("../database/config");


function pegarEsporte() {

    var instrucaoSql = `
    select idesporte as idEsporte, nome as nomeEsporte from esporte;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarEsporte
}
