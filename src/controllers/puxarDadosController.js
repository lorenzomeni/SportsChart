exports.puxarDadosUsuario = async (req, res) => {
    const idUsuario = parseInt(req.params.idusuario, 10);
    if (isNaN(idUsuario)) {
        return res.status(400).json({error:'Id não reconhecido'});
    }
    try {
        const respostas = await puxarDadosModel.puxarDadosPorId(idUsuario);
        if (respostas.length === 0) {
        return res.status(404).json({error:'Dados não encontrados'});
    }
    const DadosExibir = {
        user: {

        },
        esporte: {
            nome: resultados[0].Esporte
            // TERMINAR OS JSONS
        }
    };
    res.status(200).json ([DadosExibir]);
    }
    catch(error){
        console.error('Erro ao buscar as respostas',error);
        res.status(500).json({error:'Erro interno do servidor'})
        
    }
    
}