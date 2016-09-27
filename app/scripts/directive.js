(function () {
  'use strict';

 /***************************************************************/
  angular
    .module('gestor.directives', [])
    .directive('uploaderModel', uploaderModel);

    function uploaderModel ($parse)
    {
    	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
			});
		}
		};
    }
    	

  })();



