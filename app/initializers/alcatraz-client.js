import ENV from '../../config/environment';

export function initialize() {
  Alcatraz.apiUrl = ENV.alcatrazClient.rootUrl
}

export default {
  name: 'alcatraz-client',
  initialize: initialize
};
