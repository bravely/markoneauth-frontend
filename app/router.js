import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("protected");
  this.route("login");
  this.resource("Users", function() {});

  this.route("users", function() {
    this.route("new");
  });
});

export default Router;