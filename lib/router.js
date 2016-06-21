Router.configure({
  layoutTemplate: "layout"
});

Router.route('/', {name: 'home'});
Router.route('/feed', {name: 'feed'});
Router.route('/friends', {name: 'friends'});
Router.route('/profile', {name: 'profile'});
Router.route('/login', {name: 'login'});
Router.route('/signup', {name: 'signup'});

var requireLogin = function () {
// if the user is not logged in...
  if (!Meteor.userId()) {
    // ...render the home template in order to login
    this.render('home');
  } else {
    // otherwise continue
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {
  // the only pages that don't require logged in user are:
  except: ['signup', 'home']
});
