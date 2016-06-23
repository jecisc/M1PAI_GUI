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
            },
            getImgResource: function () {
                return $resource("http://localhost:8080/event/imgResource/test", {}, {

                    get: {
                        method: 'GET',
                        isArray: false
                    }
                });
            }
        }}
]);