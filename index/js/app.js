angular.module('AppModule', []).controller('AppCtrl', function ($scope) {
    var text = "";
    $scope.he = 'AngularJS';
    $scope.FormSubmit = function () {
        text += $scope.edit1;
        text += " ";
        $scope.text = text;
    }
});