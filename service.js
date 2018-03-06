(function () {
  function MovieService($http) {
    var movieList;

    return {
      getMovies: getMovies,
      setMovies: setMovies
    }

    function getMovies(genres, minLength, maxLength, minRating, maxRating) {
      var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=50"
      var genreIds = genres;
      var minLength = minLength;
      var maxLength = maxLength;
      var minRating = minRating;
      var maxRating = maxRating;


      if (genreIds.length > 0) {
        genreIds.forEach(function (Id) {
          var genreUrl = "&with_genres=" + Id;
          baseUrl += genreUrl;
        });
      }

      if (minLength) {
        var minLengthUrl = "&with_runtime.gte=" + minLength;
        baseUrl += minLengthUrl;
      }

      if (maxLength) {
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
        console.log("service", response.data.results);
        movieList = response.data.results;
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
