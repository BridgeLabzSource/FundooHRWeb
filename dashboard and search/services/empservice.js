angular.module('mainApp').service('empService', function () {

  /*
  *Sorting data according to alphabetical order by name
  */
  this.sorting = function (data) {
    dataAll = data.data.employeeList;
    // points.sort(function(a, b){return a-b});
    //dataAll  sortBy employeename
    dataAll.sort(function (a, b) {
      var nameA = a.employeeName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.employeeName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    // console.log(dataAll);

    return dataAll;
  }

  /*
  *Creating section according to alphabetical order
  */
  this.createSection = function (dataAll) {
    //changing json format
    //according to name data is stored...
    var profile = {};
    dataAll.forEach(function (element) {
      // console.log(element);
      var name = element.employeeName.toUpperCase();
      // console.log(name);
      var id = name.charAt(0);
      if (!(profile[id] && profile[id].length)) {
        profile[id] = [];
      }
      profile[id].push(element);
    });
    console.log(profile);
    return profile;
  }

  /*
  *Filltering profile According data obtained from Search Form
  */
  this.filltering = function (data, filters) {
    var results = data;
    for (var key in filters) {
      var profile = results;
      if (filters[key] != "") {
        results = [];
        profile.forEach(function (element) {
          if (element[key].toUpperCase() == filters[key].toUpperCase()) {
            results.push(element);
          }
        })
      }
    }
    console.log(results);
    return results;

  }

});