Meteor.publish("mentions",
  function() {
    return Mentions.find();
  }
)

Meteor.publish("settings",
  function() {
    return Settings.find({owner: this.userId});
  }
)

Meteor.publish("personalMentions",
  function() {
    return Mentions.find({createdBy: this.userId});
  }
)

Meteor.publish("bios",
  function() {
    return Bios.find();
  }
)

// Meteor.publish("name_of_collection", function() {
//   if (this.userId) {
//     return NameOfCollection.find({_id: });
//   } else {
//     this.ready();
//   }
// })
