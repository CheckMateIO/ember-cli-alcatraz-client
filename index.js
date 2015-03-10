/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-alcatraz-client',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app, parentAddon) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/alcatraz-client-js/index.js');
  }
};
