Template.signup.helpers({

});

Template.signup.events({
  "submit .register": function(event) {
    event.preventDefault();

    const f = $(".js-first").val();
    const l = $(".js-last").val();
    const e = $(".js-email").val();
    const p = $(".js-password").val();

    Accounts.createUser({
      profile: {
        first: f,
        last: l,
        friends: [],
        mentions: 0,
        color: "bg-danger"
      },
      email: e,
      password: p
    }, function(error) {
      if(error) { // if registration fails
        console.log(error.reason); // console log reason
        return;
      } else {
        Router.go('/feed'); // else go to feed page
      }
    });
  },


});
