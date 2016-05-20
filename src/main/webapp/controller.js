myApp.controller('TodoCtrl', function ($scope, $http) {
    var url = '/all';

    $http.get(url).success(function (response) {
        $scope.todos = response;
    });

    $scope
        .getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $http({
            url: "/add",
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
        $http.get("/delete").success(function (response) {
            $http.get(url).success(function (response) {
                $scope.todos = response;
            });
        })
    }
    $scope.clickCheckbox=function(i){
        $http({
            url: "/update",
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