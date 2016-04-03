'use strict';


controllers.controller('DescriptionCtrl', function($scope, $location) {

    $scope.back = function() {
        $location.path('/');
    };


})