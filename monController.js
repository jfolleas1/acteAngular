var app = angular.module('monActe', []);
app.controller('monCtrl', function($scope) {

    // initialisation de toutes les variables
    $scope.codeActe = 123;

    var aujd = new Date();
    $scope.annee = aujd.getFullYear();

    $scope.notaire = {
        prenom: "Phillipe",
        nom: "Antoine",
    }

    $scope.office = {
        nom: "Phillipe",
        residence: "Antoine",
        codePostale: "Phillipe",
        adresse: "Antoine",
    }


    $scope.affichageSection50128 = function() {

        if ($scope.Choix50125 == "Sous seing privé") {
            return true;
        } else {
            return false;
        }
    }
    $scope.affichageSection50126 = function() {

        if ($scope.Choix50125 == "Authentique") {
            return true;
        } else {
            return false;
        }
    }
    $scope.affichageSection50130 = function() {

        if ($scope.Choix50125 == "Brevet") {
            return true;
        } else {
            return false;
        }
    }

});