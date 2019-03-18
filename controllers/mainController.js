angular.module('myApp')
    .controller('mainController', ["$scope", "$rootScope", function ($scope, $rootScope) {

        function checkUncheck() {

            let index = Number(this.getAttribute("data-index"));
            let itemId = this.getAttribute("data-item-id");
            let itemAlreadyFoundAt = null;
            for (let i = 0; i < $rootScope.itemsToBeReplaced.length; i++) {
                if ($rootScope.itemsToBeReplaced[i].id == itemId) {
                    itemAlreadyFoundAt = i;
                }
            }
            if (this.checked === true) {
                // display textarea
                this.parentNode.parentNode.nextElementSibling.style.display = "table-row";
                // check if item is already added
                if (itemAlreadyFoundAt === null) {
                    $rootScope.itemsToBeReplaced.push({
                        "name": $rootScope.items[index].name,
                        "description": $rootScope.items[index].description,
                        "price": $rootScope.items[index].price,
                        "id": $rootScope.items[index].id,
                        "room": $rootScope.pageTitle,
                        "index": index
                    });
                } else {
                    return;
                }
            } else {
                // un-display textarea
                this.parentNode.parentNode.nextElementSibling.style.display = "none";
                // check if item is already added
                if (itemAlreadyFoundAt !== null) {
                    $rootScope.itemsToBeReplaced.splice(itemAlreadyFoundAt, 1);
                }
            }
        }

        function addComment() {

            console.log(this.parentNode.previousElementSibling.children[0].value);
        }
        
        setTimeout(() => {
            // checkbox event listeners
            let checkboxes = document.querySelectorAll("input[type='checkbox']");
            if (checkboxes.length) {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].addEventListener("click", checkUncheck);
                }
            }
            setTimeout(() => {
                // textarea event listeners
                let itemCommentBtns = document.querySelectorAll("button.item-comment-btn");
                for (let i = 0; i < itemCommentBtns.length; i++) {
                    itemCommentBtns[i].addEventListener("click", addComment);
                }
            }, 500);
        }, 500);
    }])
    .directive("completedBtn", ["$rootScope", function ($rootScope) {

        return {

            link: ($scope, element) => {

                element.on("click", () => {

                    location.assign("#/printPage");
                });
            }
        };
    }]);