var tabelaApp = angular.module('tabelaApp',['tabelaAppServices', 'tabelaAppTranslations', 'ui.router']);

tabelaApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('campeonatos', {
          url: '/',
          templateUrl: 'partials/campeonatos.html',
          controller: 'CampeonatosCtrl'
        })
        .state('tabela', {
          url: '/campeonatos/:campeonatoId',
          templateUrl: 'partials/tabela.html',
          params: {
            campeonatoId: true,
            jogosDia: false
          },
          controller: 'TabelaCtrl'
        })
        .state('time', {
          url: '/meu-time',
          templateUrl: 'partials/time.html',
          controller: 'TimeCtrl'
        })
        .state('config', {
          url: '/config',
          templateUrl: 'partials/config.html',
          controller: 'ConfigCtrl'
        });

    $urlRouterProvider.otherwise("/");

    /** REMOVER QUANDO FOR CRIAR APK
    $locationProvider.html5Mode({
      enabled: true,
      hashPrefix: '!',
      requireBase: false
     });

     **/

  }]);

tabelaApp.run(['placarService', '$translate', function(placarService, $translate) {
  placarInstance = new placarService();
  $translate.use('pt');
}]);


tabelaApp.controller('HeaderCtrl',['$scope','$rootScope', 'placarService','$timeout', '$translate', '$interval', 'notificationService', function($scope, $rootScope, placarService, $timeout, $translate, $interval, notificationService) {

}]);

tabelaApp.controller('CampeonatosCtrl',['$scope','$rootScope', 'placarService','$timeout', '$translate', '$interval', 'notificationService', function($scope, $rootScope, placarService, $timeout, $translate, $interval, notificationService) {

  //set active menu
  $rootScope.activeTab = 'campeonatos';
  $scope.showLoading = true;
  placarInstance.getCampeonatos().then(function() {
    $scope.showLoading = false;
    $scope.campeonatos = _.toArray(placarInstance.campeonatos);
  });


  trackButton = function(id) {
    _gaq.push(['_trackEvent', id, 'clicked']);
  };

}]);


tabelaApp.controller('TabelaCtrl',['$scope', '$rootScope', 'placarService', '$stateParams', function($scope, $rootScope, placarService, $stateParams) {
  //set active menu
  $rootScope.activeTab = 'time';
  $scope.currentCampeonato = $stateParams;
  $scope.onCampeonato = true;
  $scope.showLoading = true;
  if($stateParams.jogosDia) {
    $scope.tabelaData = placarInstance.getJogosDoDia();
    $scope.campeonato = {
      nome: 'diarios'
    };
    $scope.showLoading = false;
  } else {
    $scope.campeonato = placarInstance.campeonatos[$stateParams.campeonatoId];
    placarInstance.getPlacarTabelaContent($stateParams.campeonatoId).then(function() {
      $scope.showLoading = false;
      $scope.showLoading = false;
      $scope.tabelaData = placarInstance.tabela;
    });
  }

}]);

tabelaApp.controller('TimeCtrl',['$scope','$rootScope', 'placarService','$timeout', '$interval', function($scope, $rootScope, placarService, $timeout, $interval) {
//set active menu
  $rootScope.activeTab = 'time';
}]);

tabelaApp.controller('ConfigCtrl',['$scope','$rootScope', 'placarService','$timeout', '$translate', '$interval', function($scope, $rootScope, placarService, $timeout, $translate, $interval) {
  //set active menu
  $rootScope.activeTab = 'config';

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

  if($rootScope.currentLanguage) {
    $scope.currLang = $rootScope.currentLanguage;
  } else {
    $scope.currLang = $scope.languages[0];
  }

  $scope.setLanguage = function() {
    $rootScope.currentLanguage = $scope.currLang;
    $translate.use($scope.currLang.slug);
  };

}]);
