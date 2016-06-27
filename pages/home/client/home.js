Template.home.helpers({

});

Template.home.events({

  "submit form": function() {
    event.preventDefault();
    const email = $(".js-login-email").val();
    const password = $(".js-login-password").val();

    Meteor.loginWithPassword(email, password, function (error) {
      if(error) {
        console.log(error.reason);
      } else {
        Router.go("/feed");
      }
    });
  }
});
