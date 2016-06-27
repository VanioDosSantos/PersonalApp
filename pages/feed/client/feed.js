Template.feed.helpers({
  mentions: function() {
    return Mentions.find({}, {sort: {createdAt: -1}});
  },

  mentionOwner: function(mentions) {
    // console.dir(mentions)
    var userX = mentions.createdBy;
    // console.log(userX);
    var userObj = Meteor.users.findOne({_id: userX});
    // console.log(userObj)
    // console.log(userObj.profile)
    // console.log(userObj.profile.first)
    // console.log()
    return userObj.profile.first + " " + userObj.profile.last;
  }
});

Template.feed.events({
  "click .mentionBtn" : function(event) {
    event.preventDefault();

    const textInput = $(".mentionIpt").val();
    if (textInput == "") {
      alert("Type something first.");
      return;
    }

    const mentionObj = {
      text: textInput,
      mentions: 0,
      createdAt: new Date().toDateString(),
      createdBy: Meteor.userId(),
      mentionedBy: []
    }

    Meteor.call("mentionServer", mentionObj);
  },


});

Template.feedMentions.events({
  "click .mentionPlusBtn" : function(event) {
    event.preventDefault();
    // console.dir(Meteor.userId());
    Meteor.call("mentionPlus", this.m._id);
  },

  "click .mentionDlt" : function(event) {
    event.preventDefault();

    Meteor.call("dtlMention", this.m._id);
  },

});
