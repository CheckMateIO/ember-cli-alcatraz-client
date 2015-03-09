/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-alcatraz-client',

  included: function(app, parentAddon) {
    this._super.included(app);

    app.import(app.bowerDirectory + 'alcatraz-client-js/index.js');
  }
};
