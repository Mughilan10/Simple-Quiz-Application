angular.module('myApp', [])
.controller('myController', function($scope, $http) {
    $scope.users = [];

    // Function to get all users
    function getUsers() {
        $http.get('http://localhost:5001/users/')
        .then(function(response) {
            console.log(response.data.users);
            $scope.users = response.data.users;
        });
    }

    // Function to add a user
    $scope.addUser = function() {
        var data = {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
        };
        $http.post('http://localhost:5001/users/', data)
        .then(function(response) {
            getUsers();
            $scope.name = '';
            $scope.email = '';
            $scope.password = '';
        });
    };

    // Get all users on page load
    getUsers();
});
