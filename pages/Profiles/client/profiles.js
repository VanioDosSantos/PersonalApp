Meteor.subscribe("quiztwo");

Template.profiles.helpers({
  allProfiles: function() {
    return QuizTwo.find();
  }

});

Template.profiles.events({

});
