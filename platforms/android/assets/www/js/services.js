var tabelaAppServices = angular.module('tabelaAppServices', []);



tabelaAppServices.factory('notificationService',['$filter', function($filter) {
  var notificationModel = function() {
    var whitelist = [];
  };

  notificationModel.prototype.sendTextNotification = function(title, text) {
    $cordovaLocalNotification.add({
      id: "1234",
      date: new Date().getTime(),
      title: title,
      text: text,
      icon: "../icon48.png",
      autoCancel: true,
      sound: null
    }).then(function () {
    });
  };

  notificationModel.prototype.sendScoreNotification = function(partida) {
    var now = new Date().getTime();
    var _10SecondsFromNow = new Date(now + 10 * 1000);
    $cordovaLocalNotification.add({
      id: "1234",
      date: _10SecondsFromNow,
      title: "GOL!!",
      icon: "../icon48.png",
      text: partida.mandante + "x" + partida.visitante,
      autoCancel: true,
      sound: null
    }).then(function () {
    });


  };

  return notificationModel;
}]);


tabelaAppServices.factory('placarService',['$http', '$filter', function($http, $filter) {
  var placarModel = function() {
    var tabela = [];
    var campeonatos = [];
    var classificacao = [];
    var campeonatoUnico = [];
  };

  placarModel.prototype.getJogosDoDia = function() {
    var self = this;
    var temp = [];
    angular.forEach(self.campeonatos, function(value, key) {
      if(value) {
        self.getPlacarTabelaContent(key).then(function () {
          angular.forEach(self.tabela, function (value, key) {
            if(value.data == $filter('date')(new Date(), 'dd/MM')) {
              temp.push(value);
            }
          });
        });
      }
    });
    return temp;
  };


  placarModel.getCampeonatos = function() {
    return this.campeonatos;
  };


  //recebe um ID e retorna um campeonato
  placarModel.prototype.getPlacarTabelaContent = function(id) {
    var self=this;
    return $http.get("http://www.futebolinterior.com.br/gerados/placar_"+id+".json").then(
      function(response) {
        response.data[0].tabela.forEach(function(resultado) {
          resultado.data = resultado.tempo.substring(0,5);
          resultado.horario = resultado.tempo.substring(6);
          for(var gol in resultado.historico) {
	    var time = resultado.historico[gol];
            resultado.historico[gol] = new Object;
            resultado.historico[gol].autor = /[a-zA-Z\u00C0-\u017F\s()��]*/.exec(gol)[0];
            resultado.historico[gol].minutos = parseInt(/[0-9]+/.exec(gol)[0]);
            resultado.historico[gol].periodo = parseInt(/([0-9])T/.exec(gol)[0].substring(0,1));
	        resultado.historico[gol].extra = /[0-9]T\spr/.exec(gol)? true: false;
	        resultado.historico[gol].time = time;
          };
          resultado.historico = _.toArray(resultado.historico);
        });
        self.tabela = response.data[0].tabela;
        _.each(response.data[0].classificacao, function(value, key, time) {
	  time[key].pg = parseInt(time[key].pg);
	  time[key].name = key;
	});
	self.classificacao = _.toArray(response.data[0].classificacao);
        return response;
      },
      function(e) {
        console.log(e);
      }
    )};

    //retorna todos os campeonatos
    placarModel.prototype.getCampeonatos = function() {
      var self=this;
      return $http.get("http://www.futebolinterior.com.br/gerados/placares.json").then(
        function(response) {
          for(var key in response.data) {
            response.data[key].id = key;
	    response.data[key].nome = response.data[key].nome.replace(/\s+/g,"_").replace(/\-+/g, "_");

          };
          self.campeonatos = response.data;
        },
        function(e) {
          console.log(response);
        }
      )};


      return placarModel;
}]);
