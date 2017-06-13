(function () {
'use strict';

angular.module("LunchApp", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){
  $scope.message = "";
  $scope.items = "";
  $scope.checkLunch = function(){
    var itemArray = $scope.items.split(',');
    if(itemArray.length > 3){
      $scope.message = "Too much";
    }
    else{
      $scope.message = "Enjoy";
    }
  };

});

})();
