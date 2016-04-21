/**
 * Created by Téo on 12/04/2016.
 */

'use strict';


services.factory('ProfilServ',['$resource',
    function($resource){
        return $resource("http://localhost:8080/user/Teobrisse",{},{
                getProfil:{method: 'GET',cache:false, isArray:false}
        });
    }]);
