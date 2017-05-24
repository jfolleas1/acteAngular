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

    $scope.comparant1 = {
        civilite: "Mr",
        prenom: "Jean",
        nom: "Martin",
        adresse: {
            ville: "BESANCON",
            code: 25000,
            numVoie: 6,
            nomVoie: "Rue Lafayette"
        }
    }


    $scope.mandants = [{
            civilite: "Mme",
            prenom: "cathrine",
            nom: "Dupond",
            adresse: {
                ville: "BESANCON",
                code: 25000,
                numVoie: 16,
                nomVoie: "Avenue Chose"
            }
        },
        {
            civilite: "Mr",
            prenom: "Phillipe",
            nom: "Arthur",
            adresse: {
                ville: "BESANCON",
                code: 25000,
                numVoie: 20,
                nomVoie: "Rue Truc"
            }
        }
    ]



    $scope.immeubles = [{
            nom: "immeuble 1",
            adresse: {
                ville: "BESANCON",
                code: 25000,
                numVoie: 16,
                nomVoie: "Avenue Chose"
            },
            prix: 500000
        },
        {
            nom: "immeuble 2",
            adresse: {
                ville: "BESANCON",
                code: 25000,
                numVoie: 20,
                nomVoie: "Rue Truc"
            },
            prix: 200000
        }
    ];

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

    $scope.affichageAdresseOffice = function() {

        if ($scope.adresseOffice) {
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

    $scope.affichageSectionOfficeSEL = function() {

        if ($scope.ChoixTypeOffice == "SEL") {
            return true;
        } else {
            return false;
        }
    }


    $scope.mandantUnique = function() {

        if ($scope.mandants.length == 1) {
            return true;
        } else {
            return false;
        }
    }

    $scope.immeubleUnique = function() {

        if ($scope.immeubles.length == 1) {
            return true;
        } else {
            return false;
        }
    }

    $scope.prixFixeChecked = function() {

        if ($scope.prixFixe) {
            return true;
        } else {
            return false;
        }
    }

    $scope.venteSepChecked = function() {

        if ($scope.venteSep) {
            return true;
        } else {
            return false;
        }
    }

    $scope.addMandant = function() {



        $scope.mandants.push({
            civilite: "Mr",
            prenom: "Phillipe",
            nom: "Arthur",
            adresse: {
                ville: "BESANCON",
                code: 25000,
                numVoie: 20,
                nomVoie: "Rue Truc"
            }
        });


    }

    $scope.delMandant = function(index) {
        $scope.mandants.splice(index, 1);
    }


});