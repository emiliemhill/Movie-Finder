(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService) {
      var vm = this;
      vm.returned = MovieService.returnParams();
      MovieService.getMovies(vm.returned);
      vm.movies = MovieService.setMovies();

      console.log(vm.returned);
      vm.nextMovie = function() {
        vm.movies.splice(0, 1);
        console.log(vm.movies);
      }
      vm.showMovies = function() {
        vm.movies = MovieService.setMovies();
      }

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }

      vm.nextMovieList = function () {
        console.log("next movie list called")
        // vm.returned = MovieService.returnParams();
        // console.log(vm.returned);
      }
      vm.nextMovieList();
      // if (vm.movieShow >= 20) {
      //   console.log("Hello");
      //   vm.movieparam = MovieService.returnParams();
      //   console.log(vm.movieparam);
      //   MovieService.getMovies(vm.movieparam);
      // }

      vm.showMovies();

    }
  }



  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
