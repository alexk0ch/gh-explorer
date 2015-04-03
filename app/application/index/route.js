import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.$.getJSON('https://api.github.com/search/users?q=followers:%3E255+sort:followers&page=0')
      .then((data)=> { return data.items })
  },

  afterModel: function (userModel) {
    $(document).attr('title', 'gh-explorer: welcome!');
  }
});
