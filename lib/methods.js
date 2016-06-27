Meteor.methods({
  sayWhazzupClient: function() {
    console.log("Whazzzup!!!");
  },

  mentionClient: function(mentionObj) {
    Mentions.insert(mentionObj);
  },


})
