Meteor.subscribe("quiztwo")

Template.myprofile.helpers({

});

Template.myprofile.events({
  "submit .js-info": function(event) {
    event.preventDefault();

    const infoF = $(".js-infoFirst").val();
    const infoL = $(".js-infoLast").val();
    const infoN = $(".js-infoNick").val();
    const infoE = $(".js-infoEmail").val();
    const infoB = $(".js-infoBirth").val();

    const infoObj = {
      first: infoF,
      last: infoL,
      nickname: infoN,
      email: infoE,
      birthday: infoB
    }

    Meteor.call("insertInfo", infoObj);

    $(".js-infoFirst").val("");
    $(".js-infoLast").val("");
    $(".js-infoNick").val("");
    $(".js-infoEmail").val("");
    $(".js-infoBirth").val("");

    alert("Profile Submitted");

  }
});
