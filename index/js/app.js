//'use strict';**

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


    /*ref.authWithPassword({
        email: 'paskal-os@i.ua',
        password: 'password'
    }, function (error, data) {
        if (error) {
            console.log('error');
        } else {
            colsole.log('good');
        }
    });

    ref.on('value', function (snapshot) {
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

//app.controller('AppCtrl', function ($scope, $firebaseSimpleLogin) {
    //var ref = new Firebase('https://mypoj-c6cf8.firebaseio.com');
    //var loginObj = $firebaseSimpleLogin(ref);
    //loginObj.$login('password', {
    //    email: 'paskal-os@i.ua',
    //    password: 'password'
    //}).then(function (user) {
    //    console.log('Authentication successful');
    //}, function (error) {
    //    console.log('Authentication failed');
    //});
    //ref.authWithPassword({
    //    email: 'bobtony@firebase.com',
    //    password: 'correcthorsebatterystaple'
    //}, function (error, data) {
    //
    //});
    //
    /*ref.on('value', function (snapshot) {
        $('#span1').text(snapshot.val().text);
    }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
    });
    $scope.FormSubmit = function () {
        var curtxt = $scope.edit1;
        ref.update({ text: curtxt });
        $('#span1').text(curtxt);
    }
});*/