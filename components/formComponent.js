(function() {
  var formComponent = {
    templateUrl: `partials/form.html`,
    controller: function() {
      var $ctrl = this;
      $ctrl.keysearch = function (form) {
        console.log(form);
      }
      $ctrl.rating = function () {
        console.log($ctrl.firstRate); 
   $ctrl.firstRate = 0;
   $ctrl.readOnly = true;
   $ctrl.onItemRating = function(rating){
     alert('On Rating: ' + rating)
   }
};
      }
    }

  angular
    .module("myApp")
    .component("formComponent", formComponent)
})();
