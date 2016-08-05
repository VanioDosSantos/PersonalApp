Router.configure({
  layoutTemplate: "layout"
});

Router.route('/', {name: 'home'});
Router.route('/feed', {name: 'feed'});
Router.route('/friends', {name: 'friends'});
Router.route('/profile', {name: 'profile'});
Router.route('/login', {name: 'login'});
Router.route('/signup', {name: 'signup'});
Router.route('/settings', {name: 'settings'});
Router.route('/rQuiz2', {name: 'rQuiz2'});
Router.route('/rQuiz4', {name: 'rQuiz4'});

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

Router.route('/review/:_id', {
    name: "review",
    data: function() {
        const u = Reviews.findOne({_id: this.params._id});
        // console.dir(u);
        return u;
    }
});

Router.onBeforeAction(requireLogin, {
  // the only pages that don't require logged in user are:
  except: ['signup', 'home', 'rQuiz4']
});

Router.route('/userMentions/:_id',
        {name: "userMentions", data: function() {
          const u = Mentions.findOne({_id: this.params._id});
          console.dir(u);
          return u;
        }});

Router.route('/test', {name: 'test'});
