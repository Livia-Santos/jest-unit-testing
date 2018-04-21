const countdown = require('./timer.js');

describe('timer suite', function(){
  it('Should call the done callback when the timer has finished counting', function(){
    countdown(1, function(currentTime) {
      console.log('Progress callback invoked with time ' + currentTime);
    }, function() {
      console.log('Done callback invoked');
    });
  });
});
