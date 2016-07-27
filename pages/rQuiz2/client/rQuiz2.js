Meteor.subscribe("theDonations");

Template.rQuiz2.helpers({
  donations: function() {

      var sortWhat = Template.instance().sort.get();
      if (sortWhat === "amount") {
        return Donations.find({}, {sort: {amount: -1}, limit: 10}).fetch();
      } else {
        return Donations.find({}, {sort: {when: -1}, limit: 10}).fetch();
      }



  },

});

Template.rQuiz2.events({
  "click .donate": function(event) {
    event.preventDefault();

    const to = $(".to").val();
    const donor = $(".donor").val();
    const amount = $(".amount").val();

    const donationObj = {
      donor: donor,
      amount: amount,
      when: new Date(),
      to: to
    }

    Meteor.call("addDonation", donationObj);

  },
  "change .sort": function(event, template) {
    event.preventDefault();

    const sortVal = $(".sort").val();
    console.log(sortVal);


    template.sort.set(sortVal);
    console.log(Template.instance().sort.get());
  },

});

Template.rQuiz2.onCreated(function() {

  this.sort = new ReactiveVar("when");

});

Template.eachDonation.events({
  "click .delete": function(event) {
    event.preventDefault();

    const id = this._id;

    Meteor.call("deleteDonation", id);

  },

});
