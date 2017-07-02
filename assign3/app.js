(function(){
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('MenuCheckController', MenuCheckController)
        .service('MenuCheckService', MenuCheckService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    MenuCheckController.$inject = ["MenuCheckService"];
    function MenuCheckController(MenuCheckService){
        var menu = this;

        var promise= MenuCheckService.getItemsFound();

        promise.then(function(response){
            config.log(JSON.stringify(response));
        })
            .catch(function(error){
                console.log("Sadness");
            });
    }

    MenuCheckService.$inject=['$http', 'ApiBasePath'];
    function MenuCheckService($http, ApiBasePath){
        var service = this;

        service.getItemsFound = function() {
            var response = $http({
                method: "$GET",
                url: (ApiBasePath + "/menu_items.json")
            });
            return response;
        };
    }

})();