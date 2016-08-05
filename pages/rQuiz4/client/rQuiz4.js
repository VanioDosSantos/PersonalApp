Meteor.subscribe("theReviews");

Template.rQuiz4.helpers({
  review: function() {
    return Reviews.find();
  } ,
});

Template.rQuiz4.events({
  "click .submit-review": function(event) {
    event.preventDefault();

    const x = $(".team").val();
    const y = $(".reviewer").val();
    const z = $(".rating").val();
    const w = $(".feedback").val();

    const obj = {
      reviewer: y,
      team: x,
      rating: z,
      feedback: w,
      time: new Date()
    }

    Meteor.call("review", obj);
  },

});
