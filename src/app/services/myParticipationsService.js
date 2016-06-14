services.factory('MyParticipationsServ',['$resource','$rootScope','$cookies',

    function($resource,$rootScope,$cookies) {
       
        return {
           getMyParticipations: function () {
                return $resource("http://localhost:8080/event/myParticipations", {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            getMyEventsInvitation: function () {
                return $resource("http://localhost:8080/event/myEventsInvitation", {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            acceptEvent:function(idEvent){
                return $resource("http://localhost:8080/event/accept/"+idEvent, {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            denyEvent:function(idEvent){
                return $resource("http://localhost:8080/event/deny/"+idEvent, {}, {

                    get: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        };
    }
]);
