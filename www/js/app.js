
var app = angular.module('imc', ['ionic']);

app.controller('principalCtrl', function($scope) {
  $scope.peso=80;
  $scope.altura=1.75;
  $scope.imc=0;
  $scope.situacao='magro';

  $scope.calcula=function(peso,altura){
    $scope.imc=peso/(altura*altura);
    if ($scope.imc<17){
      $scope.situacao='Muito abaixo do peso';
    }
    else if ($scope.imc<18.49){
      $scope.situacao='Abaixo do peso';
    }
    else if ($scope.imc<24.99){
      $scope.situacao='Peso normal';
    }
    else if ($scope.imc<29.99){
      $scope.situacao='Acima do peso';
    }
    else {
      $scope.situacao='Obeso';
    }
  }
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
