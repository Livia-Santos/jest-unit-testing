const countdown = require('./timer.js');

jest.useFakeTimers(); // <= This mocks out any call to setTimeout, setInterval with dummy functions

describe('timer suite', function(){
  it('Should call the done callback when the timer has finished counting', function() {
    const progressCallbackSpy = jest.fn();
    const doneCallbackSpy = jest.fn();
    countdown(1, progressCallbackSpy, doneCallbackSpy);

    jest.runTimersToTime(1000); // <= Move the time ahead with 1 second

    expect(progressCallbackSpy.mock.calls.length).toBe(1);
    const firstCall = progressCallbackSpy.mock.calls[0];
    const firstCallArg = firstCall[0];
    expect(firstCallArg).toBe(1);
  });

  it('Should call the done callback when the timer has finished counting and the countdown is 4 secs', function() {
    const progressCallbackSpy = jest.fn();
    const doneCallbackSpy = jest.fn();

    countdown(4, progressCallbackSpy, doneCallbackSpy);

    jest.runTimersToTime(4000); // <= Move the time ahead with 4 seconds

    expect(progressCallbackSpy.mock.calls.length).toBe(4);
  })

});
