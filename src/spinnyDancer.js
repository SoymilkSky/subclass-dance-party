var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinny"></span');
  // this.step();
  this.setPosition(top, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  //this.$node.toggle();

  // this got it to spin but like? not really????
  // var rand = Math.floor(rotateNum * 180) & 360;
  // this.$node.css('transform', 'rotate(' + rand + 'deg)');

  // this.$node.animate(
  //   { deg: 180 },
  //   {
  //     duration: 9999,
  //     step: function(now) {
  //       $(this).css({ transform: 'rotate(' + now + 'deg)' });
  //     }
  //   });

  var start = this.left;

  this.$node.animate({left: '200px'}, 5000);

  this.$node.animate({left: '900px'}, 5000);
};

