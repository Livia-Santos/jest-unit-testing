const sum = require('./sum.js');

describe('sum suite', function(){
  it('Should add 2 positve numbers and return the result', function(){
    expect(sum(1,2)).toBe(3);
  });
  it('Should add 2 negative numbers and return the result', function(){
    expect(sum(-1,-2)).toBe(-3);
  });
  it('Should add 1 positive and 1 negative numbers and return the result', function(){
    expect(sum(-1,2)).toBe(1);
  });
  it('Should add 1 positive and 0 and return the result', function(){
    expect(sum(2,0)).toBe(2);
  });
  it('Should add 1 negative and 0 together and return the result', function(){
    expect(sum(0, -2)).toBe(-2);
  });
  it('Should raise an error if one of the inputs is not a number', function(){
    expect(() => sum("0",-2)).toThrowError('Both arguments must be numbers');
  })
})
