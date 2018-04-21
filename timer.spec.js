const countdown = require('./timer.js');

describe('timer suite', function(){
  it('Should call the done callback when the timer has finished counting', function(done){
    const progressCallbackSpy = jest.fn();
    const doneCallbackSpy = jest.fn(function() {
      console.log('Done spy invoked');
      done();
    });
    countdown(1, progressCallbackSpy, doneCallbackSpy);
  });
});
