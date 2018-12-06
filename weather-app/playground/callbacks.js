const getUser = (id, cb) => {
  const user = {
    id,
    name: 'Alina',
  };
  setTimeout(() => {
    cb(user);
  }, 2000)
}

getUser(20, (user) => {
  console.log(user)
});
