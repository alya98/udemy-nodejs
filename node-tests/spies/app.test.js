const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Alina', 20);
    expect(spy).toHaveBeenCalledWith('Alina', 20 );
  });

  it('should call saveUser with user object', () => {
    const email = 'alya98@tut.by';
    const password = '1234';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
})