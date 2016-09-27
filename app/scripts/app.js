(function () {
  'use strict';

  function config ($routeProvider) {
   
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/get.tpl.html',
        controller: 'GetAutorCtrl'

      })

      .otherwise({ reditrectTo : '/listado' });

  } 

  angular
    .module('gestor', ['ngRoute','gestor.controllers', 'gestor.services', 'gestor.directives','ui.bootstrap','ngResource'])
    .config(config);
//gestor.templates
   //'gestor' es el identificador de la aplicacion, aparece en index.html 

})();





