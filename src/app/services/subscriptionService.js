/**
 * Created by vincent on 15/03/16.
 */
'use strict';



services.factory('SubscriptionServ',['$resource',
    function($resource){
        return $resource("http://localhost:8080/user/create",{},{
            save: {method: 'POST', cache:false, isArray:false}
        });
    }]);