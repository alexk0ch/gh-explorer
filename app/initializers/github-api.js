export function initialize(container, application) {
  application.inject('route', 'github-api', 'service:github-api');
}

export default {
  name: 'github-api',
  initialize: initialize
};
