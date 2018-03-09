(function() {
  var watchComponent = {
    templateUrl: `partials/watch.html`,
    controller: function(DetailService, $location) {
      $ctrl = this;
      $ctrl.movie;
      $ctrl.goBack = function () {
        $location.path("/select");
      }

      $ctrl.setMovieDetails = function() {
        console.log("click");
        $ctrl.movie = DetailService.setMovieDetails();
      }
  }
}
  angular
    .module("myApp")
    .component("watchComponent", watchComponent);

})();
