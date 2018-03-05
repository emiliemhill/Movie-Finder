(function() {
  var formComponent = {
    templateUrl: `partials/form.html`,
    controller: function() {
      var $ctrl = this;
      $ctrl.keysearch = function (form) {
        console.log(form);
      }
      $ctrl.rating = function () {
        $ctrl.firstRate = 0;
   		$ctrl.readOnly = true;
   	}
   	$ctrl.onItemRating = function(rating){
    	$ctrl.keysearch(form);
	};
      }
    }

  angular
    .module("myApp")
    .component("formComponent", formComponent)

})();
