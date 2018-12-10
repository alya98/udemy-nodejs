const utils = require('./utils');
const expect = require('expect');
describe('Utils', () => {
  describe('#add', () => {
    it('should add 2 numbers', () => {
      const res = utils.add(23,11);
      expect(res).toBe(34).toBeA('number');
    
    })
    
    it('should async add 2 numbers', (done) => {
      utils.asyncAdd(23,11, (sum) => {
        expect(sum).toBe(34).toBeA('number');
        done();
      });
    
    })
  })
  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3);
      expect(res).toBe(9).toBeA('number');
    })
    
    it('should async square a number', (done) => {
      utils.asyncSquare(9, (square) => {
        expect(square).toBe(81).toBeA('number');
        done();
      });
    
    })
  })
  
  it('should verify first and last names are set', () => {
    const user = utils.setName({}, 'alina miron')
    expect(user).toInclude({firstName: 'alina', lastName: 'miron'});
  })

})