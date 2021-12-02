//comment

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    database: "sql10453712",
    user: "sql10453712",
    password: "hcjMA2wTW6",
    port: 3306
  });

con.connect(async function(err) {
    if (err) return err; 
  });

  export default function getTarefas(request, response){
    con.query("SELECT * FROM TAREFA", function (err, result, fields) {
      if (err) return err;
      const listaTarefas = [];
      return response.json({
        listaTarefas: result
  })
    });
  }

  
