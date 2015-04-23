import Ember from 'ember';

var alcatraz = {

  storeCard: function(data, callback) {
    return Ember.$.ajax({
      url: this.rootUrl + "/cards",
      dataType: "jsonp",
      data: Ember.$.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  },

  getCard: function(key, passcode, id, callback) {
    return Ember.$.jsonp({
      url: this.rootUrl + "/cards/" + id,
      callback: 'callback',
      dataType: "json",
      callbackParameter: "callback",
      data: {
        auth: {
          public_key: key,
          passcode: passcode
        }
      },
      success: callback,
      error: callback
    });
  },

  storeData: function(data, callback) {
    return Ember.$.ajax({
      url: this.rootUrl + "/secure_data",
      dataType: "jsonp",
      data: Ember.$.extend({}, data, {
        _method: 'post'
      }),
      success: callback
    });
  },

  getData: function(key, passcode, id, callback) {
    return Ember.$.jsonp({
      url: this.rootUrl + "/secure_data/" + id,
      callback: 'callback',
      dataType: "json",
      callbackParameter: "callback",
      data: {
        auth: {
          public_key: key,
          passcode: passcode
        }
      },
      success: callback,
      error: callback
    });
  }
};

export default alcatraz;
