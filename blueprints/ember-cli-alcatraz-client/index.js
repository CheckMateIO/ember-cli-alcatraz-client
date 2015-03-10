module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('alcatraz-client-js', '~0.0.1');
  }
};
