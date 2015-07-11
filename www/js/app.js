var tabelaApp = angular.module('tabelaApp',['tabelaAppServices', 'tabelaAppTranslations']);

tabelaApp.controller('MainCtrl',['$scope','$rootScope', 'placarService','$timeout', '$translate', '$interval', 'notificationService', function($scope, $rootScope, placarService, $timeout, $translate, $interval, notificationService) {
  updateCampeonato = null;
  $translate.use('pt');
  
  var placarInstance = new placarService();
  var notificationInstance = new notificationService();
  var currentMatches = [];
  
  placarInstance.getCampeonatos().then(function() {
    $scope.campeonatos = placarInstance.campeonatos;
    $scope.diarios = placarInstance.getJogosDoDia();
    startCampeonatos();
  });


  $rootScope.$on('scoresChanged', function(event, args) {
    placarInstance.getPlacarTabelaContent(args).then(function() {
      currentMatches[args]= placarInstance.tabela;
    });
  });

  trackButton = function(id) {
    _gaq.push(['_trackEvent', id, 'clicked']);
  };

  $scope.showJogosDoDia = function() {
    $scope.showLoading = true;
    $scope.tabelaData = $scope.diarios;
    $scope.showLoading = false;
  };

  startApp = $timeout(function() {
    $scope.showJogosDoDia();
    $scope.hiddenMenu = true;

  }, 3000);

  $scope.showCampeonato = function(id) {
    $scope.showLoading = true;
    placarInstance.getPlacarTabelaContent(id).then(function() {
      $scope.tabelaData = placarInstance.tabela;
      currentMatches[id]= placarInstance.tabela;
      $scope.showLoading = false;
      $scope.classificacaoData = placarInstance.classificacao;
    });
  };


  function startCampeonatos() {
    _.each(placarInstance.campeonatos, function(campeonato, key) {

      //cria objeto com tabela atual para cada um campeonato.id
      placarInstance.getPlacarTabelaContent(key).then(function() {
        currentMatches[key]= placarInstance.tabela;
      });

      //compara com novo array a cada 10 segundos
      updateCampeonato = $interval(function() {
        placarInstance.getPlacarTabelaContent(key).then(function() {
          notificationInstance.checkNotifications(currentMatches[key], placarInstance.tabela, key);
        });
      }, 10000);
    });
  };


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
