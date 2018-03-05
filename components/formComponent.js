(function() {
  var formComponent = {
    templateUrl: `partials/form.html`,
    controller: function() {
      var $ctrl = this;
      $ctrl.keysearch = function (form) {
        console.log(form);
      }
    }
  }
  angular
    .module("myApp")
    .component("formComponent", formComponent)
})();
