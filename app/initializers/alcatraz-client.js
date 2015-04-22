import config from '../config/environment';
import Alcatraz from 'ember-cli-alcatraz-client/alcatraz';

export function initialize() {
  Alcatraz.rootUrl = config.alcatrazClient.rootUrl;
}

export default {
  name: 'alcatraz-client',
  initialize: initialize
};
