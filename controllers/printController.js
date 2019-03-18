angular.module("myApp")
    .controller("printController", ["$scope", "$rootScope", function($scope, $rootScope) {

        $scope.printItems = $rootScope.itemsToBeReplaced;
        $scope.generalInfo = $rootScope.apartmentInfo;

        console.log($scope.printItems);
        console.log($scope.generalInfo);
    }]);