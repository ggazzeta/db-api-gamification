//comment

var mysql = require('mysql');

const apiSecret = process.env.CONVERTKIT_API_SECRET;

var con = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    database: "sql10453712",
    user: "sql10453712",
    password: apiSecret,
    port: 3306
  });

con.connect(async function(err) {
    if (err) return err; 
  });

  export default function getTarefas(request, response){
    con.query("SELECT ID, NOME, LOGIN, EMAIL, NIVEL, TIME, FUNCAO, XP FROM USUARIO", function (err, result, fields) {
      if (err) return err;
      const listaTarefas = [];
      return response.json({
        listaTarefas: result
  })
    });
  }

  
