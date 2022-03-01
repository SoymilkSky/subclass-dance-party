var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

makeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.animate({transform: 'translateY(-100px) rotate(1rad) scaleX(2) skewY(42deg)'});
  this.$node.animate({transform: 'translateY(-200px) rotate(1rad) scaleX(2) skewY(42deg)'});

};