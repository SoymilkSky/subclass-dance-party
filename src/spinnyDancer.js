var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinny"><img src="images/spinnyboi.gif" alt="blanks"></span>');
  this.setPosition(top, left);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this got it to spin but like? not really????
  // var rand = Math.floor(rotateNum * 180) & 360;
  // this.$node.css('transform', 'rotate(' + rand + 'deg)');
  this.$node.animate({'margin-left': '200px'}, 5000);
  this.$node.animate({'margin-left': '500px'}, 5000);
};
