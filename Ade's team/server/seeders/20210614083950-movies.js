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
      'movies', [
        {
          title: 'MAX BISHOP (2021)',
          description: 'Seorang pembunuh bayaran yang tidak bekerja mencari pekerjaan sebagai petugas kebersihan di sekolah dasar setempat..',
          release_date: '1 Juny 2021',
          director: 'Jack Beranek',
          featured_song: 'MAX BISHOP Rheme Song',
          budget: ' $500.000,00',
          rating: 6,
          synopsis: 'Max Bishop mengawali adegan dengan pengamatan terhadap seorang pria. Ia mengamatinya dari lantai atas sebuah ruangan yang tidak terlalu besar. Max mencatat kegiatan pria tersebut.',
          trailer: 'https://www.youtube.com/watch?v=eURor1UwuHk',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fposter%2Faot.jpeg?alt=media&token=4eb5c17d-0435-4069-9085-aefd2e3c264a',
          category_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Playing for Keeps (2012)',
          description: 'Seorang mantan bintang olahraga yang jatuh pada masa-masa sulit mulai melatih tim sepak bola putranya dalam upaya untuk mendapatkan kehidupannya bersama.',
          release_date: '29 November 2012',
          director: 'Gabriele Muccino',
          featured_song: 'Love Came Here',
          budget: '$ 35.000.000,00',
          rating: 9,
          synopsis: 'Kisah berawal ketika George Dyer memutuskan untuk pensiun dari pemain sepak bola Skotlandia. Padahal sebelum pensiun, George merupakan atlet yang memiliki banyak penggemar.',
          trailer: 'https://www.youtube.com/watch?v=ez9U9bw4XwM',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fposter%2Fkeeps.jpeg?alt=media&token=104e948d-4a3b-4de4-bffd-b7750870bcb9',
          category_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Into the Woods (2014)',
          description: 'Di hutan yang penuh dengan karakter sihir dan dongeng, seorang tukang roti dan istrinya berangkat untuk mengakhiri kutukan yang diberikan oleh tetangga mereka, seorang penyihir jahat.',
          release_date: '24 December 2014',
          director: 'Rob Marshall',
          featured_song: 'Prologue: Into the Woods',
          budget: '$ 50.000.000,00',
          rating: 5.8,
          synopsis: 'Baker dan istrinya menginginkan anak tetapi menderita kutukan yang diletakkan pada keluarga Baker oleh penyihir yang mendapati ayah Baker merampok kebunnya saat ibunya hamil.',
          trailer: 'https://www.youtube.com/watch?v=7pjy5MK1X70',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fposter%2Fino%20the%20woods.jpeg?alt=media&token=531dec1e-cdbf-440c-b5f8-b44264275a52',
          category_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'A Good Old Fashioned Orgy (2011)',
          description: 'Sekelompok anak usia 30 tahun yang telah berteman sejak sekolah menengah berusaha mengadakan pesta akhir musim panas.',
          release_date: '2 September 2011',
          director: 'Alex Gregory, Jennifer Opresnick, Peter Huyck',
          featured_song: 'Come On Come On',
          budget: '$500.000,00',
          rating: 6,
          synopsis: 'Eric ( Jason Sudeikis ) adalah seorang remaja berusia 30 tahunan yang hidup untuk berpesta, mengadakan acara bertema mewah dengan teman-temannya menggunakan rumah besar ayahnya di Hamptons.',
          trailer: 'https://www.youtube.com/watch?v=CrW8oewmwWo',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fposter%2Forgy.jpg?alt=media&token=ac429c50-beca-4caf-8eed-4530cfc99e57',
          category_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Bullets of Justice (2019)',
          description: 'Selama Perang Dunia III, pemerintah Amerika memulai proyek rahasia dengan nama sandi ‘Army Bacon’ untuk menciptakan tentara super dengan mengawinkan manusia dengan babi.',
          release_date: '23 Agustus 2019',
          director: 'Valeri Milev',
          featured_song: 'It looks like we dont have any Soundtracks for this title yet',
          budget: '$500.000,00',
          rating: 6,
          synopsis: 'Mantan pemburu bayaran Rob Justice bekerja untuk garis terakhir perlawanan manusia – sekelompok penyintas yang bersembunyi di bunker nuklir jauh di bawah tanah – dan misinya adalah mencari dan menghancurkan Pusat Moncong.',
          trailer: 'https://www.youtube.com/watch?v=MHDG_KVhD4s',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fposter%2Fbullets.jpg?alt=media&token=a5e2a18a-9c25-46b6-900b-ca8d72b075a3',
          category_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {})
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
