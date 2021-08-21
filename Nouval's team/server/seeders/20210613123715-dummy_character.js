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
      "Characters",
      [
        {
          movieId: 1,
          castId: 1,
          characterName: "P.T. Barnum",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 1,
          castId: 2,
          characterName: "Charity Barnum",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 1,
          castId: 3,
          characterName: "Phillip Carlyle",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 2,
          castId: 4,
          characterName: "Javert",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 2,
          castId: 5,
          characterName: "Fantine",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 2,
          castId: 6,
          characterName: "Cosette",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 175,
          characterName: "Jordan Belfort",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 7,
          characterName: "Donnie Azoff",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 8,
          characterName: "Naomi Lapaglia",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 9,
          characterName: "Mark Hanna",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 4,
          castId: 10,
          characterName: "Ally",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 4,
          castId: 11,
          characterName: "Jack",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 4,
          castId: 12,
          characterName: "Bobby",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 5,
          castId: 13,
          characterName: "Freddie Mercury",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 5,
          castId: 14,
          characterName: "Mary Austin",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 5,
          castId: 15,
          characterName: "Brian May",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 6,
          castId: 175,
          characterName: "Jay Gatsby",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 6,
          castId: 16,
          characterName: "Daisy Buchanan",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 6,
          castId: 17,
          characterName: "Tom Buchanan",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 6,
          castId: 18,
          characterName: "Myrtle Wilson",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 7,
          castId: 19,
          characterName: "Benjamin Button",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 7,
          castId: 20,
          characterName: "Daisy",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 7,
          castId: 21,
          characterName: "Elizabeth Abbott",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 8,
          castId: 22,
          characterName: "Chris Gardner",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 8,
          castId: 23,
          characterName: "Linda",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 8,
          castId: 24,
          characterName: "Christopher",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 9,
          castId: 25,
          characterName: "Alan Turing",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 9,
          castId: 26,
          characterName: "Joan Clarke",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 9,
          castId: 27,
          characterName: "Hugh Alexander",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 10,
          castId: 28,
          characterName: "Chuck Noland",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 10,
          castId: 29,
          characterName: "Kelly Frears",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 10,
          castId: 30,
          characterName: "Ramon",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 11,
          castId: 31,
          characterName: "Stephen Hawking",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 11,
          castId: 32,
          characterName: "Jane Hawking",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 11,
          castId: 33,
          characterName: "Robert Hawking - Age 17",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 12,
          castId: 175,
          characterName: "Danny Archer",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 12,
          castId: 34,
          characterName: "Solomon Vandy",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 12,
          castId: 35,
          characterName: "Maddy Bowen",
          createdAt: new Date(),
          updatedAt: new Date()      
        },

        // Budi
        //13
        {
          movieId:13 ,
          castId: 36,
          characterName: "Estella / Cruella",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 13,
          castId: 37,
          characterName: "The Baroness",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:13 ,
          castId: 38,
          characterName: "Jasper",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //14
        {
          movieId: 14,
          castId: 39,
          characterName: "Srikant Tiwari",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 14,
          castId: 40,
          characterName: " Suchitra Tiwari",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 14,
          castId: 41,
          characterName: " JK Talpade",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //15
        {
          movieId:15 ,
          castId: 42,
          characterName: "Rachel Green",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:15 ,
          castId: 43,
          characterName: "Monica Geller/Monica Geller-Bing",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:15 ,
          castId: 44,
          characterName: "Phoebe Buffay/Ursula Buffay",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //16
        {
          movieId: 16,
          castId: 45,
          characterName: "Sandy Kominsky",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:16 ,
          castId: 46,
          characterName: "Mindy Kominsky",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:16 ,
          castId: 47,
          characterName: "Jude",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //17
        {
          movieId: 17,
          castId: 48,
          characterName: "Deborah Vance",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 17,
          castId: 49,
          characterName: "Ava",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 17,
          castId: 50,
          characterName: "Marcus",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //18
        {
          movieId:18 ,
          castId: 51,
          characterName: "Bo Burnham",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //19
        {
          movieId: 19,
          castId: 52,
          characterName: "Billy Butcher",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 19,
          castId: 53,
          characterName: "Hughie Campbell",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 19,
          castId: 54,
          characterName: "Homelander",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //20
        {
          movieId: 20,
          castId: 55,
          characterName: "Lola Bunny (Voice)",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 20,
          castId: 56,
          characterName: "Al-G Rhythm",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 20,
          castId: 57,
          characterName: "Kamiyah James",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //21
        {
          movieId: 21,
          castId: 58,
          characterName: "Michael Scott",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 21,
          castId: 59,
          characterName: "Pam Beesly",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 21,
          castId: 60,
          characterName: "Jim Halpert",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
         //22
        {
          movieId: 22,
          castId: 61,
          characterName: "Karl Grove/The Narrator",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 22,
          castId: 62,
          characterName: "Simone Grove",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 22,
          castId: 63,
          characterName: "Alma Fillcot",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
         //23
        {
          movieId: 23,
          castId: 64,
          characterName: "Mae",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 23,
          castId: 65,
          characterName: "George",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 23,
          castId: 66,
          characterName: "Phil",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //24
        {
          movieId: 24,
          castId: 67,
          characterName: "Jay Pritchett",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 24,
          castId: 68,
          characterName: "Gloria Delgado-Pritchett",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 24,
          castId: 69,
          characterName: "Claire Dunphy",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //25
        {
          movieId: 25,
          castId: 70,
          characterName: "Johnny Rose",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 25,
          castId: 71,
          characterName: "Moira Rose",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 25,
          castId: 72,
          characterName: "David Rose",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //26
        {
          movieId: 26,
          castId: 73,
          characterName: "Jennifer Aniston-self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 26,
          castId: 74,
          characterName: "Courteney Cox-self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 26,
          castId: 75,
          characterName: "Lisa Kudrow-self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //27
        {
          movieId: 27,
          castId: 76,
          characterName: "Wanda Maximoff/The Scarlet Witch",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 27,
          castId: 77,
          characterName: "Vision/The Vision",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 27,
          castId: 78,
          characterName: "Agnes/Agatha Harkness",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //29
        {
          movieId: 29,
          castId: 82,
          characterName: "Poppy",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 29,
          castId: 83,
          characterName: "Ian",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId:29 ,
          castId: 84,
          characterName: "C.W. Longbottom",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //30
        {
          movieId: 30,
          castId: 85,
          characterName: "Liza Miller",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 30,
          castId: 86,
          characterName: "Kelsey Peters",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 30,
          castId: 87,
          characterName: "Maggie Amato/Maggie",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //31
        {
          movieId: 31,
          castId: 88,
          characterName: "Jake Peralta",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 31,
          castId: 89,
          characterName: "Rosa Diaz",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 31,
          castId: 90,
          characterName: "Terry Jeffords",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //32
        {
          movieId: 32,
          castId: 91,
          characterName: "Jean Claude Van Damme-self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 32,
          castId: 92,
          characterName: "Alexandre",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 32,
          castId: 93,
          characterName: "Archibald",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        //================================================
        //AMAL
        {
          movieId: 33,
          castId: 94,
          characterName: "Usnavi",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 33,
          castId: 95,
          characterName: "Nina Rosario",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 33,
          castId: 96,
          characterName: "Abuela Claudia",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 34,
          castId: 97,
          characterName: "Rachel Green",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 34,
          castId: 98,
          characterName: "Phoebe Buffay",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 34,
          castId: 99,
          characterName: "Chandler Bing",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 35,
          castId: 100,
          characterName: " Dr. Meredith Grey",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 35,
          castId: 101,
          characterName: "Dr. Richard Webber",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 35,
          castId: 102,
          characterName: " Dr. Owen Hunt",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 36,
          castId: 103,
          characterName: "Mae",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 36,
          castId: 105,
          characterName: "Walter Sylvan",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 36,
          castId: 115,
          characterName: "Nick Bannister",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 37,
          castId: 106,
          characterName: "Lagertha",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 37,
          castId: 107,
          characterName: "Bjorn Lothbrok",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 37,
          castId: 108,
          characterName: "Ivar",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 38,
          castId: 109,
          characterName: "Leslie",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 38,
          castId: 110,
          characterName: "Sam",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 38,
          castId: 111,
          characterName: "Grace",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 39,
          castId: 112,
          characterName: "Mae",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 39,
          castId: 113,
          characterName: "Phil",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 39,
          castId: 98,
          characterName: "Linda",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 40,
          castId: 115,
          characterName: "Robert Crawley",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 40,
          castId: 116,
          characterName: "Cora Crawley",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 40,
          castId: 117,
          characterName: "Lady Edith Crawley  ",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 41,
          castId: 118,
          characterName: "Jay Pritchett",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 41,
          castId: 119,
          characterName: "Claire Dunphy",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 41,
          castId: 120,
          characterName: "Mitchell Pritchett",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 42,
          castId: 121,
          characterName: "Claire Randall",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 42,
          castId: 122,
          characterName: "Murtagh Fraser",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 42,
          castId: 123,
          characterName: "Roger Wakefield",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 43,
          castId: 97,
          characterName: "Self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 43,
          castId: 98,
          characterName: "Self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 43,
          castId: 126,
          characterName: "Self",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 44,
          castId: 127,
          characterName: "Leonard Hofstadter",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 44,
          castId: 128,
          characterName: "Penny",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 44,
          castId: 129,
          characterName: "Raj Koothrappali",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 45,
          castId: 130,
          characterName: "Liza Miller",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 45,
          castId: 131,
          characterName: "Maggie Amato",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 45,
          castId: 132,
          characterName: "Diana Trout",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 46,
          castId: 133,
          characterName: "Jack Pearson",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 46,
          castId: 134,
          characterName: "Randall Pearson",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 46,
          castId: 135,
          characterName: " Kevin Pearson",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 47,
          castId: 136,
          characterName: "Clark Kent",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 47,
          castId: 137,
          characterName: "Jordan Kent",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 47,
          castId: 138,
          characterName: "Sarah Cushing",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 48,
          castId: 139,
          characterName: "Ted Mosby",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 48,
          castId: 140,
          characterName: "Robin Scherbatsky",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 48,
          castId: 141,
          characterName: "Lily Aldrin",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 49,
          castId: 142,
          characterName: " Victor Salazar",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 49,
          castId: 143,
          characterName: "Felix Weston",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 49,
          castId: 144,
          characterName: "Andrew",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 50,
          castId: 145,
          characterName: "Gossip Girl",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 50,
          castId: 146,
          characterName: "Aki Menzies",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 50,
          castId: 147,
          characterName: "Jason",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 51,
          castId: 148,
          characterName: "Elena Gilbert",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 51,
          castId: 149,
          characterName: "Damon Salvatore",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 51,
          castId: 150,
          characterName: "Caroline Forbes",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 52,
          castId: 151,
          characterName: "Eddie Saville",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 52,
          castId: 152,
          characterName: "Maggie Bloom",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 52,
          castId: 153,
          characterName: "Katherine Saville",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 53,
          castId: 154,
          characterName: "Jack Malik",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 53,
          castId: 155,
          characterName: "Carol",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 53,
          castId: 156,
          characterName: "Sheila Malik",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 54,
          castId: 157,
          characterName: "Temperance Brennan",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 54,
          castId: 158,
          characterName: "Angela Montenegro",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 54,
          castId: 159,
          characterName: "Camille Saroyan",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 55,
          castId: 160,
          characterName: "Cher",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 55,
          castId: 161,
          characterName: "Tai",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 55,
          castId: 162,
          characterName: "Murray",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 56,
          castId: 163,
          characterName: "Veer",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 56,
          castId: 164,
          characterName: "Karthik",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 56,
          castId: 165,
          characterName: "Agastya",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 57,
          castId: 166,
          characterName: "Daphne Bridgerton",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 57,
          castId: 167,
          characterName: "Penelope Featherington",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 57,
          castId: 168,
          characterName: "Philipa Featherington",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 58,
          castId: 169,
          characterName: "Matthew Kidman",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 58,
          castId: 170,
          characterName: "Danielle",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 58,
          castId: 171,
          characterName: "Hugo Posh",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 59,
          castId: 172,
          characterName: "John B",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 59,
          castId: 173,
          characterName: "Kiara",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 59,
          castId: 174,
          characterName: "Pope",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 60,
          castId: 175,
          characterName: "Jack Dawson",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 60,
          castId: 176,
          characterName: "Cal Hockley",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 60,
          castId: 177,
          characterName: "Ruth Dewitt Bukater",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 61,
          castId: 178,
          characterName: "Raya",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 61,
          castId: 179,
          characterName: "Sisu",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 61,
          castId: 180,
          characterName: "Namaari",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 62,
          castId: 181,
          characterName: "Dominic Toretto",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 62,
          castId: 182,
          characterName: "Letty",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 62,
          castId: 183,
          characterName: "Mia",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 63,
          castId: 184,
          characterName: "Nathan Lind",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 63,
          castId: 185,
          characterName: "Madison Russell",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 63,
          castId: 186,
          characterName: "Ilene Andrews",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 64,
          castId: 187,
          characterName: "Thor",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 64,
          castId: 188,
          characterName: "Loki",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 64,
          castId: 189,
          characterName: "Heimdall",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 64,
          castId: 20,
          characterName: "Hela",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 65,
          castId: 190,
          characterName: "Bruce Wayne",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 65,
          castId: 191,
          characterName: "Joker",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 65,
          castId: 192,
          characterName: "Harvey Dent",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 66,
          castId: 4,
          characterName: "Maximus",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 66,
          castId: 193,
          characterName: "Commodus",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 66,
          castId: 194,
          characterName: "Lucilla",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 67,
          castId: 195,
          characterName: "Grant",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 67,
          castId: 196,
          characterName: "Ellie",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 67,
          castId: 197,
          characterName: "Malcolm",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 68,
          castId: 198,
          characterName: "Michael Bryce",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 68,
          castId: 199,
          characterName: "Darius Kincaid",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 68,
          castId: 200,
          characterName: "Sonia Kincaid",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 69,
          castId: 201,
          characterName: "Peter Parker",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 69,
          castId: 202,
          characterName: "Mysterio",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 69,
          castId: 203,
          characterName: "MJ",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 70,
          castId: 204,
          characterName: "Frodo",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 70,
          castId: 205,
          characterName: "Legolas",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 70,
          castId: 206,
          characterName: "Gandalf",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 71,
          castId: 207,
          characterName: "Tony Stark",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 71,
          castId: 208,
          characterName: "Bruce Banner",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 71,
          castId: 209,
          characterName: "Natasha Romanoff",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 71,
          castId: 210,
          characterName: "Steve Rogers",
          createdAt: new Date(),
          updatedAt: new Date()      
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
  }
};
