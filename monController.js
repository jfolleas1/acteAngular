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
        nom: "SERVEUR JURISTE",
        residence: "BESANCON",
        codePostale: 25000,
        adresse: "CENTRE D AFFAIRE LA CITY"
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


    $scope.affichageSectionOfficeSCP = function() {

        if ($scope.ChoixTypeOffice == "SCP") {
            return true;
        } else {
            return false;
        }
    }

    $scope.affichageSectionOfficeSCP = function() {

        if ($scope.ChoixTypeOffice == "SCP") {
            return true;
        } else {
            return false;
        }
    }

});