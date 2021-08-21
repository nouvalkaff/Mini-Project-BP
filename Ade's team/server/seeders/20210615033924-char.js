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
      await queryInterface.bulkInsert(
      'chars', [
      {
        movie_id: 70,
        character_name: 'Dara',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F1.jpg?alt=media&token=bd2fe2ac-0716-477d-8630-dc49692a9fbc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Bima',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F2.png?alt=media&token=53fbee3a-c40c-45e7-a82d-58e8f8438334',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Dewi',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F3.jpg?alt=media&token=6ae56e08-c4c9-42dc-8881-0d4b8065480a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Rika - Dara Mother',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F4.jpg?alt=media&token=0de2b3a5-bd64-4b83-962d-fc788424fb4b',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Puput - Dara Sister',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F5.png?alt=media&token=d905e3d4-6075-47c1-aa4a-b22c6e3d29ac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'David - Dara Father',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F6.jpg?alt=media&token=49932cca-68fb-4a11-b29a-95cd644a9b57',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Ibu Bima',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F7.jpg?alt=media&token=71cb69a8-a279-4418-b9ef-595b52a21824',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Dr. Fiza',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2Funnamed.jpg?alt=media&token=93cbe18f-4fb3-4a13-be8d-a9399264deb4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Rudy - Bima Father',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F9.jpg?alt=media&token=5659eb0a-b175-4d1a-a141-8d0f575a072e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Adi',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F10.jpg?alt=media&token=35d352f5-9a42-4216-a197-7954245edda1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Lika',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F11.jpg?alt=media&token=33dcc2ea-d164-45a6-9893-c5c4a5105d73',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 70,
        character_name: 'Pak Rinto',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fdua%20garis%20biru%2F12.jpeg?alt=media&token=d1c455a0-3996-48c7-97c9-7a8287ebb6b6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   movie_id: 66,
      //   character_name: 'Fadil Aziz',
      //   character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fgundala%2F13.jpg?alt=media&token=52d6dfe6-e7c3-4eb8-8c99-2ecba11df5cd',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   movie_id: 66,
      //   character_name: 'Fenny Dani',
      //   character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fgundala%2F14.jpg?alt=media&token=0534ff1d-5042-4f85-9e42-f83be9822bb8',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   movie_id: 66,
      //   character_name: 'Indra Rahayu',
      //   character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/film%20indo%2Fgundala%2F15.jpg?alt=media&token=7d143dc6-f958-4db1-aa79-f67aca88257f',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
