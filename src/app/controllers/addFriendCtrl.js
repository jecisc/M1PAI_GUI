/**
 * Created by vincent on 06/05/2016.
 */


controllers.controller('AddFriendCtrl',['NgTableParams','$resource','ManageFriendsServ','$scope','$window','dialogs',
    function(NgTableParams,$resource,ManageFriendsServ,$scope,$window,dialogs) {

       
        $scope.tableParams = new NgTableParams({},{
            counts:[],
            getData:function($defer,params) {

                /**
                 * On compte le nombre de résultats afin d'évaluer le nombre de pages
                 */
                ManageFriendsServ.getNumberOfUsersFilterByPseudo(params.filter()).get()
                    .$promise.then(function success(numberOfUsers) {

                    params.total(Math.round(numberOfUsers.result/5));

                });

                return ManageFriendsServ.searchUsersByPseudo(params.filter(), params.page(), params.count()).get()
                    .$promise.then(function (data) {

                        return data;
                    });
            }
        });

        $scope.selectedRow = null;  // initialize our variable to null
        $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
            $scope.selectedRow = index;

        };

        $scope.addFriendRequest=function(){
            var id=$scope.selectedRow;

            return ManageFriendsServ.addFriendRequest($scope.tableParams.data[id].id).add()
                .$promise.then(function success() {
                    $scope.tableParams.data.splice(id,1);
                    console.log($scope.tableParams.data[id]);
                    $scope.friendsAsking.push($scope.tableParams.data[id]);
                    dialogs.notify("Demande d'ami envoyée","La demande d'ami a bien été envoyée !");
                        
                    },
                    function error(errorResponse) {
                        if(errorResponse.status=500){
                            dialogs.error("Demande d'ami existante","Cette demande d'ami existe déjà !");
                        }

                    }
                )
        };

        ManageFriendsServ.getFriendsAsking().get()
            .$promise
            .then(
                function success(data) {
                    $scope.friendsAsking={};
                    $scope.friendsAsking=data;
                },
                function error(errorResponse) {

                }
            );
}]);

