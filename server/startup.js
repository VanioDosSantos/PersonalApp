Meteor.startup (function () {
  Mentions.remove({});
  Mentions.insert({owner:"Vanio Dos Santos", text:"Whazuuuup JBS 2016!", mentions: 2, mentionedBy:["Tim Hickey, Nilse Dos Santos"], createdAt: new Date().toDateString()});
  Mentions.insert({owner:"TIm Hickey", text:"Let's create apps.", mentions: 1, mentionedBy:["Mercedes Hall"], createdAt: new Date().toDateString()});
  Mentions.insert({owner:"Mercedes Hall", text:"I'm ready!", mentions: 0, mentionedBy:[], createdAt: new Date().toDateString()});

  Meteor.users.remove({});
  // Users.remove({});
  // Users.insert({
  //   firstName:"Vanio",
  //   lastName:"Dos Santos",
  //   friends:["Mercedes Hall", "Nilse Dos Santos", "Tim Hickey"],
  //   totalMentions: 11
  // });
})
