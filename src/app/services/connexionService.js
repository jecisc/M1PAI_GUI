/**
 * Created by vincent on 15/03/16.
 */
'use strict';


services.factory('ConnexionServ',['$resource',
    function($resource){
        return $resource("http://localhost:8080/user/connexion",{},{
            get: {method: 'GET',cache:false, isArray:false}
        });
    }]);