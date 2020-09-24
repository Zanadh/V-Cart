'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let cartTest =[
    {
     GuestId:2,
     ProductId:6,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     GuestId:2,
     ProductId:1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    ]
   return queryInterface.bulkInsert('Carts',cartTest,{} )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   return queryInterface.bulkDelete('Carts',null,{} )
  }
};
