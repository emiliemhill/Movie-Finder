(function () {
  function MovieService($http) {
    var movieList;

    return {
      getMovies: getMovies,
      setMovies: setMovies
    }

    function getMovies(searchObj) {
      var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=50";
      var genreIds = searchObj.id;
      var minLength = searchObj.minLength;
      var maxLength = searchObj.maxLength;
      var minRating = searchObj.minRating;
      var maxRating = searchObj.maxRating;

      if (genreIds) {
          genreIds.forEach(function (id) {
          var genreUrl = "&with_genres=" + id;
          baseUrl += genreUrl;
        });

      }

      if (minLength <= 60){
        var lessThan60 = "&with_runtime.lte=60";
        baseUrl += lessThan60;
      } else if (minLength > 60) {
        var minLengthUrl = "&with_runtime.gte=" + minLength;
        baseUrl += minLengthUrl;
      }

      if (maxLength >= 180) {
        var moreThan180 = "";
        baseUrl += moreThan180;
      } else if (maxLength < 180){
        var maxLengthUrl = "&with_runtime.lte=" + maxLength;
        baseUrl += maxLengthUrl;
      }



      if (minRating) {
        var minRatingUrl = "&vote_average.gte=" + minRating;
        baseUrl += minRatingUrl;
      }

      if (maxRating) {
        var maxRatingUrl = "&vote_average.lte=" + maxRating;
        baseUrl += maxRatingUrl;
      }

      return $http({
        method: "GET",
        url: baseUrl
      }).then(function (response) {
        // console.log("service", response.data.results);
        movieList = response.data.results;
        // console.log("movie list", movieList);
      });
    }

    function setMovies() {
      return movieList;
    }

  }

  angular
    .module("myApp")
    .factory("MovieService", MovieService);

})();
