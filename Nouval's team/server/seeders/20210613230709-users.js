'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      fullName: 'Jane',
      userName: 'Diana',
      email: 'diana@example.com',
      profilPicture: 'https://smallimg.pngkey.com/png/small/44-448187_download-user-icon-png-clipart-computer-icons-user.png',
      password: 'test123',
      roleId: 1
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
