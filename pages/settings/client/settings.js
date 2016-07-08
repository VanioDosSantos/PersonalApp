Meteor.subscribe("settings");

Template.settings.helpers({

});

Template.settings.events({
    "click .js-profileIntroBtn": function(event) {
        event.preventDefault();
        const intro = $(".js-profileIntro").val();

        const profileIntro = {
            text: intro,
            owner: Meteor.userId()
        }

        console.dir(profileIntro);
        Meteor.call("newIntro", profileIntro);

        $(".js-profileIntro").val("");

        Router.go("/profile");
    }
});
