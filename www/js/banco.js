/*
var futebol = {};
futebol.webdb = {};
futebol.webdb.db = null;


function init() {
  futebol.webdb.open();
  futebol.webdb.createTable();
  pegaDados();
}    


futebol.webdb.open = function() {
  var dbSize = 5 * 1024 * 1024; // 5MB
  futebol.webdb.db = openDatabase("tabela", "1.0", "tabela manager", dbSize);
}

futebol.webdb.createTable = function() {
  var db = futebol.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS tabela(ID INTEGER)", []);
  });
}

futebol.webdb.deletetabela = function() {
  var db = futebol.webdb.db;
  db.transaction(function(tx){
    tx.executeSql("DELETE FROM tabela",
        futebol.webdb.onSuccess,
        futebol.webdb.onError);
    });
}

futebol.webdb.addtabela = function(tabelaText) {
  var db = futebol.webdb.db;
  db.transaction(function(tx){
    tx.executeSql("INSERT INTO tabela(ID) VALUES ("+tabelaText+")");
   });
}

function pegaDados() {
  var db = futebol.webdb.db;
    db.transaction(function(tx) {
      tx.executeSql("SELECT * FROM tabela", [], function (tx, results) {var len = results.rows.length;
      //AQUI QUE TEM QUE MUDAR A FUNCAO, TIRA ESSE ALERT E COLOCA A FUNÇÃO PRA ABRIR A TABELA COM ESSE ID.
      alert(results.rows.item(0).ID);}, futebol.webdb.onError);
  });
}*/
