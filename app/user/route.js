import Ember from 'ember';

export default Ember.Route.extend({

  model (params) {
    return Ember.$.getJSON(this['github-api'].get('API_URL') + '/users/' + params.login);
  },

  afterModel: function (userModel) {
    $(document).attr('title', 'gh-explorer: ' + userModel.name);
  }

});
 