Template.friends.helpers({
  users: function() {
    // create function to find current user's friends in alphabetical order
    return Meteor.users.find({firstName: "Vanio"}, {friends: 1});
  },
  // let numOfFriends = Users.find({firstName:"Vanio"}, {friends: 1}).count();
});

Template.friends.events({
  "click .cut" : function(event) {
    event.preventDefault();

    alert("Implement login system to actually enable friend cut."); // temporary line
    // Users.remove(this.user.friends._id); // most likely incorrect
  },
});
