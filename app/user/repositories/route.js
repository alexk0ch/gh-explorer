import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    var user = this.modelFor('user');
    return Ember.$.getJSON(user.repos_url);
  }
});
