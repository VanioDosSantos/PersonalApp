Template.feed.helpers({
  mentions: function() {
    return Mentions.find({}, {sort: {createdAt: -1}});
  },
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
      // createdBy: Meteor.userId(),
      // mentionedBy: [],
    }

    Mentions.insert(mentionObj);
  },
});

Template.feedMentions.events({
  "click .mentionDlt" : function(event) {
    event.preventDefault();

    alert("Implement login system to actually enable deletion."); // temporary line
    // Mentions.remove(this.mention._id);
  },
  "click .mentionPlusBtn" : function(event) {
    event.preventDefault();

    alert("Mentioned it! - You need help with it."); // temporary line
    // Mentions.update(
    //   { owner: this.mention.owner },
    //   { $inc: { mentions: 1 }, *add user who liked this to mentionedBy property* }
    // );

    Mentions.update({firstName: "Vanio"}, {$inc: {mentions: 1}});
  }
});
