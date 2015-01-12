import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    sendEmail: function() {
      var _this = this,
        email = this.get('reset_email'),
        formData = { user: { email: email } };

      ajax({
        url: '/users/password',
        type: 'post',
        data: formData
      }).then(function() {
        _this.transitionToRoute('index');
      });
      return false;
    }
  }
});
