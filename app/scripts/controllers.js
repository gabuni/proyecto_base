(function () {
  'use strict';




  /***************************************************************/
  angular
    .module('gestor.controllers', [])
    .controller('ImgCtrl',  ImgCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .controller('GetAutorCtrl', GetAutorCtrl);

    // el module y controller aparecen definidos en el archivo app.js
    function ImgCtrl ($scope, upload)
    {
        $scope.upFile= function()
        {
            var name = $scope.name;
            var file = $scope.file;
            //llamo al servicio 'upload'
            upload.uploadFile(file, name).then(function(res)
            {
                console.log(res);
            })
        }    
    }

   function HomeCtrl(addArticulo, $scope) {  
     
     $scope.crearArticulo = function(){  
            addArticulo
                .getAll()
                .then(function(data) {
                    $scope.elementos = data;
                    console.log( $scope.elementos);
                })
      }
  }

  function GetAutorCtrl(getAutor, $http, $scope){

     $scope.getDatos = function(){
        //hacemos uso de $http para obtener los datos del json
        $http.get('http://localhost/api/v2/autorPages').success(function (data) {
            //Convert data to array.
            //datos lo tenemos disponible en la vista gracias a $scope
            $scope.datos = data;
            //console.log($scope.datos);
        });
        //datosResource lo tenemos disponible en la vista gracias a $scope
        $scope.datosResource = getAutor.get();
     }
  }

//});

})();







 