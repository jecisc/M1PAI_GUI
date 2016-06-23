/**
 * Created by vincent on 15/03/16.
 */
'use strict';


services.factory('ConnexionServ',['$resource','$cookies','$location','$http',

        function($resource){
            return{
                authenticate:function(username,password) {
                    return $resource("http://localhost:8080/user/get", {}, {
                        login: {
                            method: 'GET', headers: {Authorization: "Basic " + btoa(username + ":" + password)},
                            cache: false, isArray: false
                        }
                    });
                },

                logout:function(){
                    return $resource("http://localhost:8080/user/logout", {}, {
                        logout: {
                            method: 'POST',
                            cache: false,
                            isArray: false
                        }
                    });
                    
                }


        }}]);


