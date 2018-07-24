digitalGarageApp.controller('DigitalGarageController',
  function ($scope, DigitalGarageFactory) {
  
    DigitalGarageFactory.getNavlinks()
      .then(function (res) {
        $scope.navlinks = res;
      })

    DigitalGarageFactory.getFooterlinks()
      .then(function (res) {
        $scope.footerlinks = res;
      })

    DigitalGarageFactory.getIcons()
      .then(function (res) {
        $scope.icons = res;
      })

    DigitalGarageFactory.getPrograms()
      .then(function (res) {
        $scope.programs = res;
      })

    DigitalGarageFactory.getApplications()
      .then(function (res) {
        $scope.applications = res;
      })

    DigitalGarageFactory.getTabs()
      .then(function (res) {
        $scope.tabs = res;
      })

});