var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    database: "sql10453712",
    user: "sql10453712",
    password: "hcjMA2wTW6"
  });

var tarefasResultado = [];

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM TAREFA", function (err, result, fields) {
      if (err) throw err;
      tarefasResultado = result;
    });
  });

 export default function tarefas(request, response){
      const listaTarefas = [];

      response.json({
          listaTarefas: tarefasResultado
    })
  }