digitalGarageApp.factory('DigitalGarageFactory', function ($http) {
  Factory = {};

  Factory.getNavlinks = function () {
    return $http.get('/api/navlinks')
      .then(function (res) {
        return res.data
      });
  }


  Factory.getFooterlinks = function () {
    return $http.get('/api/footerlinks')
      .then(function (res) {
        return res.data
      })
  }
  
  Factory.getIcons = function () {
    return $http.get('/api/icons')
      .then(function (res) {
        return res.data
      })
  }
  
  Factory.getPrograms = function () {
    return $http.get('/api/programs')
      .then(function (res) {
        return res.data
      })  
  }

  Factory.getApplications = function () {
    return $http.get('/api/applications')
      .then(function (res) {
        return res.data
      })
  }

  Factory.getTabs = function () {
    return $http.get('/api/tabs')
      .then(function (res) {
        return res.data
      })
  }
  return Factory
})