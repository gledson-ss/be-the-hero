const express = require('express');

const app = express();

//transformar em json, e ser entendivel na aplicação, evitar o undefined.
app.use(express.json());
/*
*GET: Buscar uma informação no back end
*POST: Criar uma informação no backend
*PUT: Alterar uma informação no backend
*Delete: Deletar uma informação no backend
*/

/*
*tipos de parâmetros:
* Query: Parâmetros enviados na rota após o simbolo "?", (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utlizado para criar ou alterar recusrsos
*/
app.post('/users', (req, res) =>{
    //const params = req.query;
    //console.log(params);
    //ex Rota: http://localhost:3333/users?name=Gledson&irma=glendha

    //const params = req.params;
    //console.log(params);
    //ex Rota: http://localhost:3333/users/1

    //const body = req.body;
    //console.log(body);
    //utiliza post(obvio para criação)
    //ex Rota: http://localhost:3333/users
    return res.json({
        nome : 'gledson',
        idade : 20
    })
});

app.listen(3333);
