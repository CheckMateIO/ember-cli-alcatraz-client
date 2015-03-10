import config from '../../config/environment';

export function initialize() {
  window.Alcatraz.rootUrl = config.alcatrazClient.rootUrl;
}

export default {
  name: 'alcatraz-client',
  initialize: initialize
};
