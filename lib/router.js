Router.configure({
  layoutTemplate: "layout"
});

Router.route('/', {name: 'home'});
Router.route('/feed', {name: 'feed'});
Router.route('/friends', {name: 'friends'});
Router.route('/profile', {name: 'profile'});
Router.route('/login', {name: 'login'});
