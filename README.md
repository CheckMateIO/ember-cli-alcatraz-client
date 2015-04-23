# ember-cli-alcatraz-client

A javascript client to communicate with the Alcatraz PCI-compliant data store.

## Installation

* Run `ember install ember-cli-alcatraz-client` in the commandline

## Usage

* Add the following to your `config/environment.js` file:

```javascript
ENV.alcatrazClient = {
  rootUrl: #set the url here
};
```

Your application will now have to the `Alcatraz` object, which you can use to make requests.

* Store a card in Alcatraz with `Alcatraz.storeCard()`

```javascript
import Alcatraz from 'ember-cli-alcatraz-client/alcatraz';

export default Ember.Component.extend({
  storeCard: function(){
    var data = {
      name: 'Jane Doe',
      number: '4111111111111111',
      expiration_month: '5',
      expiration_year: '2015',
      cvv: '123',
      postal_code: '94107',
      country_code: 'US'
    },
    Alcatraz.storeCard(data, function(response) {
      console.log(response);
    });
  }
});
```

* Retrieve a card stored in Alcatraz with `Alcatraz.getCard()`

```javascript
import Alcatraz from 'ember-cli-alcatraz-client/alcatraz';

export default Ember.Component.extend({
  passCode: '123kljakdfladfjad',
  publicKey: 'q099q0elkajdf',
  secureId: 'a093jakldf',

  getCard: function(){
    Alcatraz.getCard(this.get('publicKey'), passcode, this.get('secureId'), function(response) {
      if (response.card) {
        console.log(response.card['number']);
      }
    });
  }
});
```

* Store arbitrary secure data with `Alcatraz.storeData()`

```javascript
import Alcatraz from 'ember-cli-alcatraz-client/alcatraz';

export default Ember.Component.extend({
  storeData: function(){
    var data = {
      ssn: '123-45-6789'
    },
    Alcatraz.storeData(data, function(response) {
      console.log(response);
    });
  }
});
```

* Retrieve arbitrary secure data with `Alcatraz.getData()`

```javascript
import Alcatraz from 'ember-cli-alcatraz-client/alcatraz';

export default Ember.Component.extend({
  passCode: '123kljakdfladfjad',
  publicKey: 'q099q0elkajdf',
  secureId: 'a093jakldf',

  getData: function(){
    Alcatraz.getData(this.get('publicKey'), passcode, this.get('secureId'), function(response) {
      if (response.ssn) {
        console.log(response.ssn);
      }
    });
  }
});
```

