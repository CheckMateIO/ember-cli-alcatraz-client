# ember-cli-alcatraz-client

A javascript client to communicate with the Alcatraz PCI-compliant data store.

## Installation

* Run `ember addon:install ember-cli-alcatraz-client` in the commandline

## Usage

* Add the following to your `config/environment.js` file:

```javascript
ENV.alcatrazClient = {
  rootUrl: #set the url here
};
```

Your application will now have to the `Alcatraz` object, which you can use to make requests.
