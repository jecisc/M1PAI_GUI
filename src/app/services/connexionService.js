/**
 * Created by vincent on 15/03/16.
 */
'use strict';


services.factory('ConnexionServ',['$resource','$cookies','$location','$http',

        function($resource,$cookies,$location,$http){
            return{
                authenticate:function(username,password) {
                    return $resource("http://localhost:8080/user/get", {}, {

                        login: {
                            method: 'GET', headers: {Authorization: "Basic " + btoa(username + ":" + password)},
                            cache: false, isArray: false/*, params:{username:'@username'}*/
                        }
                    });
                },

                logout:function(){
                    $cookies.remove("username");
                    delete $http.defaults.headers.common['Authorization'];
                    $location.path('/');
                }


        }}]);


