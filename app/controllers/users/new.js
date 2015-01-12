import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(user) {
        _this.transitionToRoute('index');
      }, function(){});
      return false;
    },
    cancel: function() {
      this.transitionToRoute('login');
      return false;
    }
  }
});
