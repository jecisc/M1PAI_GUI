/**
 * Created by Téo on 19/06/2016.
 */
/**
 * Created by Téo on 15/06/2016.
 */
controllers.controller('MyEventsCtrl', ['$scope', '$location', 'MyEventsServ',  'dialogs' , function ($scope, $location, MyEventsServ,dialogs) {

    $scope.myEvents = function () {
        $location.path('/events');
    };

    $scope.manageEvent = function () {
        $location.path('/manageEvents');
    };

    $scope.myParticipations = function () {
        $location.path('/myParticipations');
    };

    $scope.myProfil = function () {
        $location.path('/profil');
    };

    $scope.returnProfil = function () {
        $location.path('/profil');
    };

   

    MyEventsServ.getMyEvents().get().$promise.then(
        function success(response) {
            $scope.mesEvenements=response;
        },
        function error(errorResponse) {
            if(errorResponse.status==401){

            }

        }
    );

    $scope.deleteEvent=function(index,idEvent){
        var dlg = dialogs.confirm("Supprimer evenement","Voulez-vous vraiment supprimer cet evenement ?","");
        dlg.result.then(function(){
            MyEventsServ.deleteEvent(idEvent).delete().$promise.then(
                function success() {
                    $scope.mesEvenements.splice(index,1);

                },
                function error() {

                    console.log("ERROR OCCUR ON CANCELLING EVENT");
                }
            );

        },function(){
            $scope.confirmed = 'You confirmed "No."';
        });


    };

    $scope.showEvent=function(idEvent) {
        $location.path('/viewEvent/'+idEvent);
    }

}]);