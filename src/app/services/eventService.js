'use strict';


services.factory('EventServ', ['$resource',

    function ($resource) {
        return {
            createEvent: function() {
                return $resource("http://localhost:8080/event/create", {}, {

                    create: {
                        method: 'POST',
                        isArray: false
                    }
                });
            }
        }}
]);