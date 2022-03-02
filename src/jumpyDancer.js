var jumpyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span id="listen" class="jumpy"><img src="images/guybrush.gif" alt="blanks"></span>');
  this.setPosition(top, left);
};

jumpyDancer.prototype = Object.create(makeDancer.prototype);

jumpyDancer.prototype.constructor = jumpyDancer;

jumpyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ 'margin-top': '50px' }); // different $node.blank( {css} );
  this.$node.animate({ 'margin-top': '0px' });
};

//this.timeBetweenSteps = 1000;


// {transform: rotate(45deg), background-color: pink; }

// this.$node.animate( {transform: rotate(45deg), background-color: pink; } );
// this.$node.animate( {transform: rotate(45) } );
