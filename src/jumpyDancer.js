var jumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.timeBetweenSteps = 1000;
  this.$node = $('<span class="jumpy"></span');
  this.step();
  this.setPosition(top, left);
};

jumpyDancer.prototype = Object.create(makeDancer.prototype);

jumpyDancer.prototype.constructor = jumpyDancer;

jumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate( {bottom: '50px', top: '100px'} ); // different $node.blank( {css} );
  this.$node.animate( {bottom: '100px', top: '50px'} );
};

// {transform: rotate(45deg), background-color: pink; }

// this.$node.animate( {transform: rotate(45deg), background-color: pink; } );
// this.$node.animate( {transform: rotate(45) } );
