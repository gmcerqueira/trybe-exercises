const description = 'My Description';

const obj1 = {
  title: 'My Title',
  description,
};

const obj2 = {
  description,
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description,
};

module.exports = {
  obj1,
  obj2,
  obj3,
};