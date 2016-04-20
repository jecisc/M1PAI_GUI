/**
 * Created by vincent on 15/03/16.
 */
'use strict';


services.factory('ConnexionServ',['$resource',
    /*function($http){

        return {authenticate:function(username,password,callback){

            var headers={};

            //if(username!={} || password!={}){
                headers={Authorization : "Basic " + btoa(username + ":" + password)};
           /* }
            else {
                headers = {};
            }

            console.log("TEST");
            return $http({
                method: 'GET',
                url: 'http://vmargerin:Password59@localhost:8080/user/'+username,
                headers: headers

            });
        }};*/

        function($resource){
            return{
                authenticate:function(username,password){
                    return $resource("http://localhost:8080/user/"+username,{},{

                        login: {method: 'GET',headers:{Authorization: "Basic " + btoa(username + ":" + password)},
                            cache:false, isArray:false/*, params:{username:'@username'}*/}
                    });
            }

        }}]);


        //authenticate();
        /*self.credentials = {};
         self.login = function(username,password,callback) {
         authenticate(username,password, function() {
         if ($rootScope.authenticated) {
         //$location.path("/");
         self.error = false;
         } else {
         //$location.path("/login");
         self.error = true;
         }
         });
         };*/


   // }]);