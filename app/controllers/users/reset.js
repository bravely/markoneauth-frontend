import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  queryParams: ['reset_password_token'],
  reset_password_token: null,

  actions: {
    reset: function() {
      var _this = this,
        token = this.get('reset_password_token'),
        password = this.get('password'),
        passwordConfirmation = this.get('password_confirmation'),
        formData = { user: { reset_password_token: token, password: password, password_confirmation: passwordConfirmation }};

      ajax({
        url: '/users/password',
        type: 'put',
        data: formData
      }).then(function() {
        _this.transitionToRoute('login');
      });
      return false;
    }
  }
});
