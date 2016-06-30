Meteor.startup (function () {
  Mentions.remove({});

  Settings.remove({});

  QuizTwo.remove({});

  // Meteor.users.remove({});
})
