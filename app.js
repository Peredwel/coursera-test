(function(){
'use strict'; /*Prevents bleeding of global variables*/

  angular.module('MyFirstApp',[])

  .controller('MyFirstController', function($scope){
    //Properties defined on scope are available to view via ng-controller
    $scope.name="Carolyn";
    $scope.sayHello = function(){
      return "Hello Coursera!";
    }
  });
})();
