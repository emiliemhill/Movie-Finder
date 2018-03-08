(function() {
  var watchComponent = {
    templateUrl: `partials/watch.html`,
    controller: function(DetailService, $location) {
      $ctrl = this;
      $ctrl.goBack = function () {
        $location.path("/select");
      }

  }
}
  angular
    .module("myApp")
    .component("watchComponent", watchComponent);

})();