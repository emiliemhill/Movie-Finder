(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService, $location) {
      var vm = this;
      vm.returned = MovieService.returnParams();
      MovieService.getMovies(vm.returned);
      vm.movies = MovieService.setMovies();
      vm.page = 1;

      console.log(vm.returned);
      vm.nextMovie = function() {
        vm.movies.splice(0, 1);
        console.log(vm.movies);
        if (vm.movies.length < 3) {

          console.log("running out of movies");
          vm.page++;
          console.log(vm.page);
          vm.returned.pagenum = vm.page;
          console.log(vm.returned.pagenum);
          console.log(vm.returned);
          MovieService.getMovies(vm.returned).then(function() {
            var newMovies = MovieService.setMovies();
            vm.movies = vm.movies.concat(newMovies);
            console.log(vm.movies);
          });

        }
      }
      vm.showMovies = function() {
        vm.movies = MovieService.setMovies();
      }

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }



      vm.nextMovieList = function() {
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
      vm.switchToWatch = function() {
        $location.path("/watch");
        console.log("switched");
      }
    }
  }



  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
