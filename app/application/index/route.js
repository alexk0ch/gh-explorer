import Ember from 'ember';

const devs = [
  { login: "robconery", name: "Rob Conery" },
  { login: "shanselman", name: "Scott Hanselman" },
  { login: "tomdale", name: "Tom Dale" },
  { login: "wycats", name: "Yehuda Katz" },
  { login: "jongalloway", name: "John Galloway" },
  { login: "haacked", name: "Phil Haack" }
];

export default Ember.Route.extend({
  model () {
    return devs;
  },

  afterModel: function (userModel) {
    $(document).attr('title', 'gh-explorer: welcome!');
  }
});
