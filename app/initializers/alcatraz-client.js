import config from '../config/environment';

export function initialize() {
  if (!window.Alcatraz) { return; };
  window.Alcatraz.rootUrl = config.alcatrazClient.rootUrl;
}

export default {
  name: 'alcatraz-client',
  initialize: initialize
};
