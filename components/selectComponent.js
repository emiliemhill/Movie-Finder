(function() {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function(MovieService, ListService, $location, DetailService) {
      var vm = this;
      vm.returned = MovieService.returnParams();
      vm.movie;
      // MovieService.getMovies(vm.returned);
      // vm.movies = MovieService.setMovies();


      console.log(vm.returned);






      vm.showMovie = function() {
        vm.movie = MovieService.setMovie();
      }

      vm.saveToList = function(movie) {
        ListService.saveToList(movie);
        vm.nextMovie();
      }

      vm.nextMovie = function(){
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
