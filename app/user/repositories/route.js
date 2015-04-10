import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    var user = this.modelFor('user');
    return Ember.$.getJSON(user.repos_url).then((model)=>{
      return model.map((repo)=>{
        repo.created_at = moment(repo.created_at, "YYYYMMDD").fromNow();
        repo.updated_at = moment(repo.updated_at, "YYYYMMDD").fromNow();
        return repo;  
      })      
    });
  }
});
