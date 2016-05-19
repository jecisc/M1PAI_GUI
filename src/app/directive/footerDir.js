'use strict'

var directive = angular.module('directive', [])
.directive('myFooter', function() {
    return {
        templateUrl: 'views/footer.html'
    };
});