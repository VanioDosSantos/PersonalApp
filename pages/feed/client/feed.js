// subscriptions
Meteor.subscribe("mentions");
// end

Template.feed.helpers({
  mentions: function() {
    return Mentions.find({}, {sort: {createdAt: -1}});
  },

  mentionOwner: function(mentions) {
    // console.dir(mentions)
    var userX = mentions.createdBy;

    // console.log(userX);
    var userObj = Meteor.users.findOne({_id: userX});
    return userObj.profile.first + " " + userObj.profile.last;
  },

  // whoMentioned: function() {
  //   var m = Mentions.find({}, {sort: {createdAt: -1}});
  //   return m;
  // }
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
    $(".mentionIpt").val("");
  },


});

Template.feedMentions.events({
  "click .mentionPlusBtn" : function(event) {
    event.preventDefault();
    // const m = this.m._id();

    Meteor.call("mentionPlus", this.m._id, Meteor.userId());

  },

  "click .mentionDlt" : function(event) {
    event.preventDefault();
    Meteor.call("dtlMention", this.m._id);
  },

});
