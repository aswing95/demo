import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('registration');
  this.route('login');
  this.route('social');
  this.route('emailverification');
  this.route('forgot');
  this.route('reset');
  this.route('profile');
});

export default Router;