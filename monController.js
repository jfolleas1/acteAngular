var app = angular.module('monActe', []);
app.controller('monCtrl', function($scope) {

    $scope.divDOptIsVisible1 = function() {
        if ($scope.monOption1) {
            return true;
        } else {
            return false;
        }
    }

    $scope.divDOptIsVisible2 = function() {
        if ($scope.monOption2) {
            return true;
        } else {
            return false;
        }
    }

    $scope.ConditionIsVisible = function() {

        if ($scope.divDOptIsVisible1() && $scope.divDOptIsVisible2()) {
            return true;
        } else {
            return false;
        }
    }


});