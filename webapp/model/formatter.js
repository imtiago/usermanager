sap.ui.define([], function () {
  "use strict";
  return {
    getYears: function (since) {
      const birthday = new Date(since);
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  };
});
