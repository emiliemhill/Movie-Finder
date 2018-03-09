(function() {
  var watchComponent = {
    templateUrl: `partials/watch.html`,
    controller: function(DetailService, $location) {
      $ctrl = this;
      $ctrl.movie = DetailService.setMovieDetails();

      $ctrl.goBack = function () {
        $location.path("/select");
      }




    //   $ctrl.setMovieDetails = function() {
    //   DetailService.setMovieDetails().then(function (resp) {
    //     $ctrl.movie = resp;
    //   });
    // }

    // $ctrl.setMovieDetails();
    // function loadPage() {
    //   DetailService.setMovieDetails().then(function(movie) {
    //     $ctrl.movie = movie;
    //   });
    // }

  }
}
  angular
    .module("myApp")
    .component("watchComponent", watchComponent);

})();
