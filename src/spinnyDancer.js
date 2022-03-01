var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinny"></span');
  this.step();
  this.setPosition(top, left);
};

makeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  //this.$node.toggle();
  this.$node.animate({transform: 'translateY(-100px) rotate(1rad) scaleX(2) skewY(42deg)'});
  this.$node.animate({transform: 'translateY(-200px) rotate(1rad) scaleX(2) skewY(42deg)'});

};