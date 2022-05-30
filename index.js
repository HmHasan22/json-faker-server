module.exports = function () {
  let { faker } = require("@faker-js/faker");
  let _ = require("lodash");
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.paragraph(),
      };
    }),
  };
};
