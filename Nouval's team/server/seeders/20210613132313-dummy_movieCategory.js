"use strict";

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
    await queryInterface.bulkInsert(
      "MovieCategories",
      [
        {
          categoryId: 2,
          movieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 6,
          movieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 10,
          movieId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 6,
          movieId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          movieId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 10,
          movieId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 6,
          movieId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // ==========================================================================
        // budi
        
        //comedy
        //1\
        {
          categoryId: 1,
          movieId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //2\
        {
          categoryId: 1,
          movieId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //skip 3
        //4\
        {
          categoryId: 1,
          movieId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //5\
        {
          categoryId: 1,
          movieId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //6\
        {
          categoryId: 1,
          movieId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //7\
        {
          categoryId: 1,
          movieId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //8\
        {
          categoryId: 1,
          movieId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //9\
        {
          categoryId: 1,
          movieId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //10\
        {
          categoryId: 1,
          movieId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //11\
        {
          categoryId: 1,
          movieId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //12\
        {
          categoryId: 1,
          movieId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //13\
        {
          categoryId: 1,
          movieId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //14\
        {
          categoryId: 1,
          movieId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //15\
        {
          categoryId: 1,
          movieId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //16\
        {
          categoryId: 1,
          movieId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //17\
        //18\
        {
          categoryId: 1,
          movieId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //19\
        {
          categoryId: 1,
          movieId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //20\
        {
          categoryId: 1,
          movieId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //21\
        {
          categoryId: 1,
          movieId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        //romance
        //4
        {
          categoryId: 3,
          movieId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //12
        {
          categoryId: 3,
          movieId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         //13
         {
          categoryId: 3,
          movieId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //15
        {
          categoryId: 3,
          movieId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         //17
         //19
         {
          categoryId: 3,
          movieId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //drama
         //2
         {
          categoryId: 2,
          movieId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         //5
         {
          categoryId: 2,
          movieId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //6
        {
          categoryId: 2,
          movieId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
       //7
         {
        categoryId: 2,
        movieId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        }, 
       //11
       {
        categoryId: 2,
        movieId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //12
      {
        categoryId: 2,
        movieId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       //13
       {
        categoryId: 2,
        movieId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //16
      {
        categoryId: 2,
        movieId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
        //action
        //2
        {
          categoryId: 4,
          movieId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         //8
         {
          categoryId: 4,
          movieId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //16
        {
          categoryId: 4,
          movieId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //21\
        {
          categoryId: 4,
          movieId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        //cartoon
        //9
        {
          categoryId: 7,
          movieId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //fantasy
        //9
        {
          categoryId: 9,
          movieId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        // =================================================================================
        // amal
        {
          categoryId: 2,
          movieId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        {
          categoryId: 3,
          movieId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 10,
          movieId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          movieId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 8,
          movieId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          movieId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          movieId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        // =========================================================================
        // nouval
        {
          categoryId: 4,
          movieId: 61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          movieId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          movieId: 71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
