(function() {
  function ListService() {
    var laterList = [];

    return {
      saveToList: saveToList,
      displayList: displayList,
      deleteFromList: deleteFromList
    }

    function saveToList(movie) {
    laterList.push({title: movie});
    console.log(laterList);
    }

    function deleteFromList() {
    laterList.pop();
    // console.log(laterList);
    }

    function displayList() {
      return laterList;
    }

  }

  angular
    .module("myApp")
    .factory("ListService", ListService);

})();
