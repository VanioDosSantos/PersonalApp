Meteor.methods({
  sayWhazzupServer: function() {
    console.log("Whazzzup!!!");
  },

  mentionServer: function(mentionObj) {
    Mentions.insert(mentionObj);
  },

  mentionPlus: function(mentionId) {
    Mentions.update({_id: id}, {$inc: {mentions: 1}});
  },

  dtlMention: function(id) {
    Mentions.remove({_id: id});
  },


})
