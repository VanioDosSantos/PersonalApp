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

Meteor.publish("quiztwo",
  function() {
    return QuizTwo.find();
  }
)

// Meteor.publish("name_of_collection", function() {
//   if (this.userId) {
//     return NameOfCollection.find({_id: });
//   } else {
//     this.ready();
//   }
// })
