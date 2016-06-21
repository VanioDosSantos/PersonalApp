Template.home.onCreated( function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
  });
});

Template.home.helpers({
  theColor: function() {
    const instance = Template.instance();
    return instance.state.get("color");

  },

  theCounter: function() {
    const instance = Template.instance();
    return instance.state.get("counter");
  },

});

Template.home.events({
  "change .js-color": function(event, instance) {
    // console.log($(".js-color").val());
    const newColor = $(".js-color").val();
    return instance.state.set("color", newColor);
  },

  "click .js-pusher": function(event, instance) {
    const count = instance.state.get("counter");
    // console.log(count);
    return instance.state.set("counter", count + 1);
  },


});
