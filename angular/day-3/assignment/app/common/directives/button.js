angular.module('directives', [])
    .directive('customAlert', function() {
        return {
            restrict: 'A',
            controller: ['$scope', function ($scope) {
            }],
            link: function($scope, $element,$attribute) {
                //console.log($attribute);
                $element.bind('click', function () {$attribute.ngClick; });
            }
        }
    })