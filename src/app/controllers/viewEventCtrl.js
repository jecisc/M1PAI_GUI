/**
 * Created by Téo on 19/06/2016.
 */
controllers.controller('ViewEventCtrl', ['$scope', '$location', '$routeParams', 'ViewEventServ',
    function ($scope, $location, $routeParams, ViewEventServ,$anchorScroll) {
        
        var id= $routeParams.idEvent;

        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
            alert('toto');
        };

        ViewEventServ.getEvent(id).get().$promise.then(
            function success(response) {
                $scope.event=response;

                console.log($scope.event);
            },
            function error(errorResponse) {
                if(errorResponse.status==401){

                }

            }
        );
        
    }]);