Router.configure({
  layoutTemplate: "layout"
});

Router.route('/feed', {name: 'feed'});
Router.route('/', {name: 'home'});
Router.route('/friends', {name: 'friends'});
Router.route('/profile', {name: 'profile'});
