Template.layout.helpers({

});

Template.layout.events({
  "click .js-logout": function() {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  },


});
