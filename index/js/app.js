//'use strict';

var app = angular.module('AppModule', ['firebase']);
app.controller('AppCtrl', ['$scope', '$firebaseSimpleLogin', function ($scope, $firebaseSimpleLogin) {
    var ref = new Firebase('https://mypoj-c6cf8.firebaseio.com');
    var loginObj = $firebaseSimpleLogin(ref);
    loginObj.$login('password', {
        email: 'paskal-os@i.ua',
        password: 'password'
    }).then(function (user) {
        console.log('Authentication successful');
    }, function (error) {
        console.log('Authentication failed');
    });

    /*ref.on('value', function (snapshot) {
        $('#span1').text(snapshot.val().text);
    }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
    });*/
    $scope.FormSubmit = function () {
        var curtxt = $scope.edit1;
        ref.update({ text: curtxt });
        $('#span1').text(curtxt);
    }
}]);