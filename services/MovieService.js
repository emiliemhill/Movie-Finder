(function() {
  function MovieService($http) {
    var movieList = [];
    var parameters;

    return {
      getMovies: getMovies,
      getCurrentMovie: getCurrentMovie,
      setParameters: setParameters,
      getParameters: getParameters,
      nextMovie: nextMovie,
      checkListLength: checkListLength,
      clearMovieList: clearMovieList
    }

    function getMovies(searchObj) {
      var pageNumber = searchObj.pagenum;
      var baseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=a420712cee91c2aec196fe700c0ceb35&sort_by=popularity.desc&include_adult=false&include_video=false&vote_count.gte=50";
      var genre = searchObj.genre;
      var minLength = searchObj.minLength;
      var maxLength = searchObj.maxLength;
      var minRating = searchObj.rating;
      console.log("searchObj page", searchObj.pagenum);

      if (genre) {
        var genreUrl = "&with_genres=";
        genre.forEach(function(each) {
          genreUrl += "%2C" + each.id;
          console.log(genreUrl);
        });
        baseUrl += genreUrl;
      }

      if (minLength >= 60) {
        var minLengthUrl = "&with_runtime.gte=" + minLength;
        baseUrl += minLengthUrl;
      }

      if (maxLength >= 180) {
        var moreThan180 = "";
        baseUrl += moreThan180;
      } else if (maxLength < 180) {
        var maxLengthUrl = "&with_runtime.lte=" + maxLength;
        baseUrl += maxLengthUrl;
      } else if (maxLength === 60) {
        var lessThan60 = "&with_runtime.lte=60";
        baseUrl += lessThan60;
      }

      if (minRating) {
        var minRatingUrl = "&vote_average.gte=" + minRating;
        baseUrl += minRatingUrl;
        console.log(baseUrl);
      }

      if (pageNumber) {
        var pageNumberUrl = "&page=" + pageNumber;
        baseUrl += pageNumberUrl;
      }

      return $http({
        method: "GET",
        url: baseUrl
      }).then(function(response) {
        // console.log("service", response.data.results);
        movieList = movieList.concat(response.data.results);
        console.log("retrieving page number", response.data.page);
        console.log(movieList);
        //console.log("movie list", movieList);
      });
    }

    function getCurrentMovie() {
      return movieList[0];
    }

    function nextMovie() {
      movieList.splice(0, 1);
    }

    function checkListLength() {
      return movieList.length;
    }

    function setParameters(parameterObject) {
      parameters = parameterObject;
    }

    function getParameters() {
      return parameters;
    }

    function clearMovieList() {
      movieList = [];
    }
  }

   angular
    .module("myApp")
    .factory("MovieService", MovieService);

})();