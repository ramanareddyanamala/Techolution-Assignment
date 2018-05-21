
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {

        var request = {
            method: 'get',
            url: 'http://localhost:8080/getData',
            dataType: 'json',
            contentType: "application/json"
        };

        $http(request)
            .success(function (jsonData) {

                $scope.name = 'World';

                $scope.cities = [
                    {
                        name: jsonData.make,
                        subsities: [ {
                            name: jsonData.name1,
                            elements: [{
                                name: jsonData.name1,
                                model: 2017,
                                url : jsonData.url1
                            }]

                        },
                            {
                                name: jsonData.name2,
                                elements: [{
                                    name: jsonData.name2,
                                    url : jsonData.url2
                                }]
                            }
                        ]
                    },
                    {
                        name: jsonData.make,
                        subsities: [ {
                            name: jsonData.name1,
                            elements: [{
                                name: jsonData.name1,
                                url : jsonData.url1
                            }]

                        },
                            {
                                name: jsonData.name2,
                                elements: [{
                                    name: jsonData.name2,
                                    url : jsonData.url2
                                }]
                            }
                        ]
                    }
                ];
                $scope.extractSubsities = function(itemSelected) {
                    if(itemSelected && itemSelected.elements){
                        $scope.data = itemSelected.elements;
                    }
                }
            })
            .error(function () {

            });
});