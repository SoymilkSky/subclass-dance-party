describe('jumpyDancer', function() {

  var jump, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jump = new jumpyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    console.log(jump);
    expect(jump.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node jump', function() {
    sinon.spy(jump.$node, 'animate');
    jump.step();
    expect(jump.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jump, 'step');
      expect(jump.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jump.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jump.step.callCount).to.be.equal(2);
    });
  });
});
