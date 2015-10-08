myApp.controller('TodoCtrl', function ($scope, $http) {
    var url = 'http://localhost:8080/all';

    $http.get(url).success(function (response) {
        $scope.todos = response;
    });

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $http({
            url: "http://localhost:8080/add",
            method: "GET",
            params: {text: $scope.formTodoText, done: false}
        }).then(
            function (successResponse) {
                $http.get(url).success(function (response) {
                    $scope.todos = response;
                });
                $scope.formTodoText="";
            },
            function (error) {
                alert('not success');
            }
        );

    };
    $scope.clear = function () {
        $http.get("http://localhost:8080/delete").success(function (response) {
            $http.get(url).success(function (response) {
                $scope.todos = response;
            });
        })
    }
    $scope.clickCheckbox=function(i){
        $http({
            url: "http://localhost:8080/update",
            method: "GET",
            params: {done: i.done,id: i.id  }
        }).then(
            function (successResponse) {
                $http.get(url).success(function (response) {
                    $scope.todos = response;
                });
            },
            function (error) {
                alert('not success');
            }
        );

    }

});