const express = require('express'); // acesso a biblioteca do express

const server = express(); // servidor do express

/**
 * GET: Buscar informações da API
 * POST: Criar algum tipo de registro / entidade na API
 * PUT: Aditar
 * DELETE: Deletar
 */

 /**
  * requisição (req): traz todas as requisições do usuário (exemple localhost:3300/?nome=Cassio)
  * 
  * resposta (resp): objeto utilizado para retornar uma resposta para o cliente
  */
 
server.get('/', (req, res) => {
  return res.json({ message: `Olá ${req.query.name}` }); // retornar um texto (query.params: Contém todos os parâmetros da URL (rotas))
});

server.listen(3300); // porta do servidor


Métodos Fundamentais:

INDEX:
SHOW: 
STORE:
UPDATE:
DELETE:
