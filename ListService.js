(function() {
  function ListService() {
    var laterList = [
      {title: "Jurassic Park"},
      {title: "Jurassic World"},
      {title: "The Lost World"}
    ];

    return {
      // saveToList: saveToList, TODO
      displayList: displayList
      // deleteFromList: deletFromList TODO
    }

    function saveToList(movie) {
      laterList.push(movie);
    }

    function displayList() {
      return laterList;
    }

  }

  angular
    .module("myApp")
    .factory("ListService", ListService);

})();
