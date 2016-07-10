var app = angular.module('AppModule', ['firebase']);


app.controller('AppCtrl', function ($scope, $firebaseObject) {
    var ref = new Firebase('https://mypoj-c6cf8.firebaseio.com')
    ref.on("value", function (snapshot) {
        $scope.data = snapshot.val().text;
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    $scope.FormSubmit = function () {
        var curtxt = $scope.edit1;
        ref.update({ text: curtxt });
        $scope.data = curtxt;
    }
});