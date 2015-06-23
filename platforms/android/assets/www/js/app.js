var tabelaApp = angular.module('tabelaApp',['tabelaAppServices', 'tabelaAppTranslations']);

tabelaApp.controller('MainCtrl',['$scope','placarService','$timeout', '$translate', function($scope, placarService, $timeout, $translate) {
  updateCampeonato = null;
  $scope.tabelaData = null;
  $translate.use('pt');
  
  var placarInstance = new placarService();
  
  placarInstance.getCampeonatos().then(function() {
    $scope.campeonatos = placarInstance.campeonatos;
    $scope.diarios = placarInstance.getJogosDoDia();
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
  }, 2000);


  $scope.showCampeonato = function(id) {
    $scope.showLoading = true;
    placarInstance.getPlacarTabelaContent(id).then(function() {
      $scope.tabelaData = placarInstance.tabela;
      $scope.showLoading = false;
      $scope.classificacaoData = placarInstance.classificacao;
    });

    $interval.cancel(updateCampeonato);

    updateCampeonato = $interval(function() {
      placarInstance.getPlacarTabelaContent(id).then(function() {
      $scope.tabelaData = placarInstance.tabela;
      $scope.classicacaoData = placarInstance.classificacao;
    });
    }, 10000);
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
