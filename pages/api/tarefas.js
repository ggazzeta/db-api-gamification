import Cookies from 'cookies';
import Mysql from 'mysql';
import Link from 'next/link';
import SQL from 'sql-template-strings';
import Layout from '../components/Layout';


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
    con.query("SELECT NOME, DESCRICAO, FINALIZADA, (SELECT NOME FROM USUARIO U WHERE U.ID = T.USUARIO) NOMEUSUARIO, (SELECT NOME FROM TIMES TI WHERE TI.ID = T.TIME) NOMETIME FROM TAREFA T", function (err, result, fields) {
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