(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService, $location, DetailService) {
      var vm = this;
      vm.returned = MovieService.returnParams();
      vm.movie;
      console.log(vm.returned);
      vm.showMovie = function() {
        vm.movie = MovieService.setMovie();
      }

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }

      vm.nextMovie = function() {
        MovieService.nextMovie();
        var listCheck = MovieService.checkListLength();
        vm.showMovie();
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
        DetailService.getMovieDetails(movie);
        $location.path("/watch");
        console.log("switched");
      }
    }
  }

  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
