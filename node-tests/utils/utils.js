module.exports.add = (a,b) => a+b;

module.exports.square = a => a*a;

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}

module.exports.asyncAdd = (a,b, cb) => {
  setTimeout(() => {
    cb(a+b);
  }, 1000)
}

module.exports.asyncSquare = (a, cb) => {
  setTimeout(() => {
    cb(a*a);
  }, 1000)
}