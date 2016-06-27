Template.profile.onCreated( function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
  });
});

Template.profile.helpers({
  theColor: function() {
    const instance = Template.instance();
    return instance.state.get("color");

  },

  theCounter: function() {
    const instance = Template.instance();
    return instance.state.get("counter");
  },

});

Template.profile.events({
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

  // "click .push": function() {
  //   console.log("clicked it");
  //     drawContext = drawSpace.getContext("2d");
  //     drawContext.strokeStyle = "#252525";
  //     drawContext.fillStyle="green";
  //     drawContext.fillRect(100,100,400,400);
  //     drawContext.moveTo(200,300);
  //     drawContext.lineTo(250,250);
  //     drawContext.strokeRect(25,25,100,100);
  //     drawContext.stroke();
  // }
});
