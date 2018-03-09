(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService, $location, DetailService) {
      var vm = this;
      vm.returned = MovieService.getParameters();
      vm.movie = MovieService.getCurrentMovie();

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }

      vm.nextMovie = function() {
        console.log("next movie clicked");
        MovieService.nextMovie();
        vm.movie = MovieService.getCurrentMovie();

        // MovieService.getCurrentMovie();
        var listCheck = MovieService.checkListLength();
        if (listCheck < 3) {
          console.log(listCheck);
          console.log("running out of movies");
          vm.returned.pagenum++;
          console.log(vm.returned.pagenum);
          console.log(vm.returned);
          MovieService.getMovies(vm.returned);
        }
      }

      vm.nextMovieList = function() {
        console.log("next movie list called")
      }
      vm.nextMovieList();

      vm.switchToWatch = function(movie) {
        DetailService.getMovieDetails(movie).then(function() {
          $location.path("/watch");
        });
      }
    }
  }

  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
