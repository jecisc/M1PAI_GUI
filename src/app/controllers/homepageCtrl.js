/**
 * Created by Téo on 03/04/2016.
 */
'use strict';


controllers.controller('HomepageCtrl',['$scope','$location','ConnexionServ', function($scope, $location,ConnexionServ) {
    
    $scope.logout=function(){
        ConnexionServ.logout();
    };

}]);