var tabelaApp = angular.module('tabelaApp',['tabelaAppServices', 'tabelaAppTranslations']);

tabelaApp.controller('MainCtrl',['$scope','$rootScope', 'placarService','$timeout', '$translate', '$interval', 'notificationService', function($scope, $rootScope, placarService, $timeout, $translate, $interval, notificationService) {
  updateCampeonato = null;
  $translate.use('pt');

  var placarInstance = new placarService();
  var lastTabelas = [];
  var lastChamp = [];
  var lastChampMatches = [];
  var whiteList = [];
  var notificationInstance = new notificationService();

  placarInstance.getCampeonatos().then(function() {
    $scope.campeonatos = placarInstance.campeonatos;
    $scope.diarios = placarInstance.getJogosDoDia();
    startCampeonatos();
  });


  $rootScope.$on('scoresChanged', function(event, args) {
    //restarta tudo

  });

  trackButton = function(id) {
    _gaq.push(['_trackEvent', id, 'clicked']);
  };

  $scope.showJogosDoDia = function() {
    $scope.showLoading = true;
    $scope.onCampeonato = false;
    $scope.tabelaData = $scope.diarios;
    $scope.showLoading = false;
    $scope.classificacaoData = null;
  };

  startApp = $timeout(function() {
    $scope.showJogosDoDia();
    $scope.hiddenMenu = true;

  }, 3000);

  $scope.showCampeonato = function(id, nome) {
    $scope.currentCampeonato = id;
    $scope.currentCampeonatoName = nome;
    $scope.onCampeonato = true;
    $scope.tabelaData = lastChampMatches[id];
    $scope.classificacaoData = lastTabelas[id];
  };


  function startCampeonatos() {
    _.each(placarInstance.campeonatos, function(campeonato, key) {
      lastChamp[campeonato.id] = campeonato;

      //get games
      placarInstance.getPlacarTabelaContent(campeonato.id).then(function() {
        lastChampMatches[campeonato.id] = placarInstance.tabela;
        lastTabelas[campeonato.id] = placarInstance.classificacao;
      });
    });
    checkCampeonatos();
  }

  $scope.signUpNotification = function() {
    whiteList.push($scope.currentCampeonato);
    notificationInstance.sendTextNotification($scope.currentCampeonatoName, "notificações ativadas");
    var initializing = true;
    //register listeners on scores
    _.each(lastChampMatches[$scope.currentCampeonato], function(partida, key) {
      $scope.$watchGroup([partida.ptn_mandante,partida.ptn_visitante], function(newValues, oldValues, scope) {
        if (initializing) {
          $timeout(function() { initializing = false; });
        } else {
          notificationInstance.sendScoreNotification(partida);
        }
      });
    });
  };


  function checkCampeonatos() {
    updateCampeonato = $interval(function () {
      _.each(whiteList, function(campeonatoId, key) {
        placarInstance.getPlacarTabelaContent(campeonatoId).then(function() {
          lastChampMatches[campeonatoId] = placarInstance.tabela;
        });
      });
    }, 10000);
  }


  $scope.languages = [
    {
      name: 'Português',
      slug: 'pt'
    },
    {
      name: 'English',
      slug: 'en'
    },
    {
      name: 'Deutsch',
      slug: 'de'
    },
    {
      name: 'Español',
      slug: 'es'
    }
  ];

  $scope.currLang = "asdas";

  $scope.setLanguage = function() {
    $translate.use($scope.currLang.slug);
  };

  //novo campeonato feito dos jogos do dia


}]);
