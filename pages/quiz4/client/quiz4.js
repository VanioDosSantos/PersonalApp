Meteor.subscribe("bios");

Template.quizFour.helpers({
  allBios: function() {
    return Bios.find({}, {sort: {createdAt: -1}});
  }
});

Template.quizFour.events({
  "submit .css-left-form": function() {
    event.preventDefault();

    const author = $(".js-bio-author").val();
    const bio = $(".js-bio-text").val();

    const biography = {
      author: author,
      bio: bio,
      createdAt: new Date()
    }

    Meteor.call("addBiography", biography);

    $(".js-bio-author").val("");
    $(".js-bio-text").val("");
  }
});
