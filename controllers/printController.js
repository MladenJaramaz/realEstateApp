angular.module("myApp")
    .controller("printController", ["$scope", "$rootScope", function($scope, $rootScope) {

        $scope.printItems = $rootScope.itemsToBeReplaced;
        $scope.generalInfo = $rootScope.apartmentInfo;

        $scope.totalPrice = 0;
        for (let i = 0; i < $scope.printItems.length; i++) {
             $scope.totalPrice += $scope.printItems[i].price;
        }
    }])
    .directive("pdfBtn", [function ($scope) {

        return {

            link: ($scope, element) => {
                
                element.on("click", () => {

                    window.print();
                });
            }
        };
    }]);