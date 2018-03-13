(function () {
  var selectComponent = {
    templateUrl: `partials/select.html`,
    controller: function ($timeout, MovieService, ListService, $location, DetailService) {
      var $ctrl = this;
      $ctrl.returned = MovieService.getParameters();
      //This saves the original search parameters so they can be called again if the listcheck conditionals are true.
      if (!($ctrl.returned)) {
        $ctrl.returned = { minLength: 60, maxLength: 180, pagenum: 1 };
        MovieService.getMovies($ctrl.returned).then(function () {

          $ctrl.movie = MovieService.getCurrentMovie();
          $ctrl.movie.forEach(function (movie) {
            movie.swipedLeft = false;
            movie.swipedRight = false;
          })

        }).then(function () {
          console.log($ctrl.movie)
        });
      }


      //This returns the first index of the movie object array returned from the API call

      $ctrl.saveToList = function (movie) {
        ListService.saveToList(movie);
        $ctrl.nextMovie();
        //This function sets the movie object in the list service to be displayed later in the list component (watch later). It also calls the nextMovie function described below.
      }

      $ctrl.deleteMovie = function () {
        $ctrl.movie.splice(0, 1);
      }

      $ctrl.nextMovie = function () {
        $ctrl.movie[0].swipedLeft = true;
        $timeout($ctrl.deleteMovie, 250);
        console.log($ctrl.movie)

        // MovieService.nextMovie();
        // calls the movieservice method to splice the first index(movie) being displayed
        // $ctrl.movie = MovieService.getCurrentMovie();
        // returns the spliced movie object array


        var listCheck = $ctrl.movie.length; 
        console.log(listCheck)
        //returns the length of the movie object array.
        if (listCheck < 3) {
          $ctrl.returned.pagenum++;
          MovieService.getMovies($ctrl.returned).then(function () {

            var moviesToAdd = MovieService.getCurrentMovie();
            
            moviesToAdd.forEach(function (movie) {
              movie.swipedLeft = false;
              movie.swipedRight = false;

            })
            $ctrl.movie = $ctrl.movie.concat(moviesToAdd); 
          //Checks if movie array is below three, if it is, the pagenum property of returned(The original search params) is incremented and another call to the API is made to grab the second page of the original return.
        });
      }
    }
      $ctrl.switchToWatch = function (movie) {
        DetailService.getMovieDetails(movie).then(function () {
          $location.path("/watch");
          //this function uses the movie object to make a separate API call for more details to be displayed in the watch component view. It also redirects you to said component. Because we're good like that
        });
      }
    }
  }
  

  
  
  angular
    .module("myApp")
    .component("selectComponent", selectComponent)
})();
