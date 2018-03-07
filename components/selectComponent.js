(function() {
  var selectComponent = {
    template: `<p id="para"> {{ $ctrl.movies[$ctrl.movieShow].title }}
      <img class="border-radius" ng-src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/{{ $ctrl.movies[$ctrl.movieShow].poster_path }}">
      <button ng-click="$ctrl.nextMovie()">Next Movie</button>
      <button ng-click="$ctrl.showMovie()">Show Movie</button>
<button
      <button ng-click="$ctrl.saveToList($ctrl.movies[$ctrl.movieShow])">Add To List</button>
    </p>`,
    controller: function(MovieService, ListService) {
      var vm = this;
      vm.movieShow = 0;
      vm.nextMovie = function() {
        vm.movieShow++;
        console.log(vm.movieShow);
      }
      vm.showMovie = function() {
        vm.movies = MovieService.setMovies();
      }

      vm.saveToList = function(movie) {
        // var movie = "movie";
        // console.log(movie);
        ListService.saveToList(movie);
      }
    }

  }



  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
