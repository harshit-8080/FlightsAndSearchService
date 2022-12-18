'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airports',[
      {
        name:"jp 1",
        address:"North Patna",
        cityID:7,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"jp 2",
        address:"South Patna",
        cityID:7,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      { 
        name:"jp 3",
        address:"West Patna",
        cityID:7,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"hp 4",
        address:"East Patna",
        cityID:7,
        createdAt:new Date(),
        updatedAt:new Date()
      }

    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('airports', null, {});
  }
};

// npx sequelize seed:generate --name add-airports
// npx sequelize db:seed:all