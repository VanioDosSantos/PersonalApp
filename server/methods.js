Meteor.methods({
  mentionServer: function(mentionObj) {
    Mentions.insert(mentionObj);
  },

  mentionPlus: function(mentionId, userId) {
    Mentions.update({_id: mentionId}, {$inc: {mentions: 1}});
    Mentions.update({_id: mentionId}, {$push: {"mentionedBy": userId}})
  },

  dtlMention: function(id) {
    Mentions.remove({_id: id});
  },

  profileColor: function(bckColor, id) {
    Meteor.users.update({_id: id}, {$set: {"profile.color": bckColor}});
  },

  newIntro: function(profileIntro) {
    Settings.remove({owner: this.userId});
    Settings.insert(profileIntro, profileIntro.owner = this.userId);
  },

  createSetting: function(settingObj) {
    Settings.insert(settingObj);
  },


})
