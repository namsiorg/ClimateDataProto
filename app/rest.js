angular.module('myApp.RestClientService', ['ngResource'])
        .factory('RestClientService', ['$q', '$resource', function ($q, $resource) {
                var factory = {
                    query: function (params) {
                        /*******
                         * 
                         *Example: http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/1980/1999/USA.JSON  
                         *var url = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country";
                         * We are using proxy to avoid CORS
                         *************/
                        var url = "http://localhost:5000" 
                        url += "/" + params.type
                                + "/" + params.var
                                + "/" + params.start
                                + "/" + params.end
                                + "/" + params.ISO3
                                + "." + "JSON";
                        var deferred = $q.defer();
                        var target = $resource(url);
                        target.query(function (data) {
                            data.params = params;
                            deferred.resolve(data);
                        }, function (error) {
                            deferred.resolve(error);
                        });
                        return deferred.promise;
                    }
                };
                return factory;
            }]);


