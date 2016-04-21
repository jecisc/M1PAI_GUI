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

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

app.directive("compareTo", compareTo);