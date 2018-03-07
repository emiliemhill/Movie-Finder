(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService) {
      var vm = this;
      vm.movies = MovieService.setMovies();
      vm.movieShow = 0;

      vm.nextMovie = function() {
        vm.movieShow++;
        console.log(vm.movieShow);
      }

      vm.showMovies = function() {
        vm.movies = MovieService.setMovies();
      }

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }

      vm.showMovies();

    }
  }



  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
