Meteor.startup (function () {
  Mentions.remove({});

  Settings.remove({});

  Bios.remove({});

  // Meteor.users.remove({});
})
