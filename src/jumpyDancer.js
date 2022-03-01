var jumpyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 1000;
};

jumpyDancer.prototype = Object.create(MakeDancer.prototype);

jumpyDancer.prototype.constructor = jumpyDancer;

jumpyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.animate( {bottom: '50px', top: '100px'} ); // different $node.blank( {css} );
  this.$node.animate( {bottom: '100px', top: '50'} );
};

// {transform: rotate(45deg), background-color: pink; }

// this.$node.animate( {transform: rotate(45deg), background-color: pink; } );
// this.$node.animate( {transform: rotate(45) } );
