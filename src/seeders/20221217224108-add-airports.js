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
        name:"terminal 1",
        address:"North Delhi",
        cityID:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"terminal 2",
        address:"South Delhi",
        cityID:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      { 
        name:"terminal 3",
        address:"West Delhi",
        cityID:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"terminal 4",
        address:"East Delhi",
        cityID:1,
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