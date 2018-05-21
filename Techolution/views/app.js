
var app = angular.module('techolution', []);

app.controller('MainCtrl', function($scope, $http) {

    var request = {
        method: 'get',
        url: 'http://localhost:8080/spectrum/lang',
        dataType: 'json',
        contentType: "application/json"
    };

    $http(request)
        .success(function (jsonData) {

            $scope.name = 'World';

            $scope.makes = [
                {
                    name: jsonData.result[0].make,
                    submodules: [ {
                        name: jsonData.result[0].name1,
                        elements: [{
                            name: jsonData.result[0].name1,
                            url : jsonData.result[0].url1
                        }]

                    },
                        {
                            name: jsonData.result[0].name2,
                            elements: [{
                                name: jsonData.result[0].name2,
                                url : jsonData.result[0].url2
                            }]
                        }
                    ]
                },{
                    name: jsonData.result[1].make,
                    submodules: [ {
                        name: jsonData.result[1].name1,
                        elements: [{
                            name: jsonData.result[1].name1,
                            url : jsonData.result[1].url1
                        }]

                    },
                        {
                            name: jsonData.result[1].name2,
                            elements: [{
                                name: jsonData.result[1].name2,
                                url : jsonData.result[1].url2
                            }]
                        }
                    ]
                }

            ];
            $scope.extractSubmodules = function(itemSelected) {
                if(itemSelected && itemSelected.elements){
                    $scope.data = itemSelected.elements;
                }
            }
        })
        .error(function () {

        });

    /*
        $scope.cities = [
            {
                name: "Ford",

                subsities: [ {
                    name: "Edge",
                    elements: [{
                        name: "Edge",
                        model: 2017,
                        url : 'http://localhost:8080/image/edge.jpeg'
                    }]

                },
                    {
                        name: "Escape",
                        elements: [{
                            name: 'Escape',
                            model : 2018,
                            url : 'http://localhost:8080/image/escape.jpeg'
                        }]
                    }
                ]
            },
            {
                name: "Acura",

                subsities: [ {
                    name: "MDX",
                    elements: [{
                        name: 'MDX',
                        model : 2012,
                        url : 'http://localhost:8080/image/MDX.jpeg'
                    }]
                },
                    {
                        name: "ILX",
                        elements: [{
                            name: 'ILX',
                            model: 2016,
                            url : 'http://localhost:8080/image/ilx.jpeg'
                        } ]
                    }
                ]
            }
        ];

        $scope.extractSubsities = function(itemSelected) {
            if(itemSelected && itemSelected.elements){
                $scope.data = itemSelected.elements;
            }
        }
    */

});