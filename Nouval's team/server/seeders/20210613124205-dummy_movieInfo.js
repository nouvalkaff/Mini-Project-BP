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
      "MovieInfos",
      [
        {
          movieId: 1,
          releaseDate: "2017-12-20",
          director: "Michael Gracey",
          featuredSong: "A Million Dreams",
          budget:84000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 2,
          releaseDate: "2012-12-25",
          director: "Tom Hooper",
          featuredSong: "Every Day/A Heart Full Of Love (Reprise)",
          budget:61000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 3,
          releaseDate: "2013-12-25",
          director: "Martin Scorsese",
          featuredSong: "Baby Got Back",
          budget:100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 4,
          releaseDate: "2018-10-5",
          director: "Bradley Cooper",
          featuredSong: "Black Eyes",
          budget:36000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 5,
          releaseDate: "2018-11-2",
          director: "Bryan Singer",
          featuredSong: "The Show Must Go On",
          budget:52000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 6,
          releaseDate: "2013-05-10",
          director: "Baz Luhrmann",
          featuredSong: "Daisy's Theme",
          budget:105000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 7,
          releaseDate: "2008-12-25",
          director: "David Fincher",
          featuredSong: "Polonaise in A-flat Major, Op. 53",
          budget:150000000 ,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 8,
          releaseDate: "2006-12-15",
          director: "Gabriele Muccino",
          featuredSong: "Feelin' Alright",
          budget:55000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 9,
          releaseDate: "2014-12-25",
          director: "Morten Tyldum",
          featuredSong: "Coffee Meditation",
          budget:14000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 10,
          releaseDate: "2000-12-22",
          director: "Robert Zemeckis",
          featuredSong: "Run Rudolph Run",
          budget:90000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 11,
          releaseDate: "2014-11-26",
          director: "James Marsh",
          featuredSong: "Time After Time",
          budget:15000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 12,
          releaseDate: "2006-12-8",
          director: "Edward Zwick",
          featuredSong: "When I Get Free",
          budget:100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 13,
          releaseDate: "2021-05-18",
          director: "Craig Gillespie",
          featuredSong: "Bloody Well Right",
          budget:200000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 14,
          releaseDate: "2012-09-20",
          director: "Krishna D.K. and Raj Nidimoru",
          featuredSong: "Dega Jaan",
          budget: 600000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 15,
          releaseDate: "1994-09-22",
          director: "David Crane and Marta Kauffman",
          featuredSong: "I'll Be There For You",
          budget:120000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 16,
          releaseDate: "2018-11-16",
          director: "Chuck Lorre",
          featuredSong: "Senorita",
          budget:150000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 17,
          releaseDate: "2021-05-13",
          director: "Lucia Aniello, Paul W. Downs and Jen Statsky",
          featuredSong: "There Is No Line",
          budget:130000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 18,
          releaseDate: "2021-05-30",
          director: "Bo Burnham",
          featuredSong: "Inside",
          budget:115000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 19,
          releaseDate: "2019-07-26",
          director: "Eric Kripke",
          featuredSong: "Get Loud For Me",
          budget:140000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 20,
          releaseDate: "2021-07-16",
          director: "Malcolm D. Lee",
          featuredSong: "Space jam",
          budget:150000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 21,
          releaseDate: "2005-03-24",
          director: "Greg Daniels(developed for american television by), Ricky Gervais and Stephen Merchant",
          featuredSong: "The Office Theme",
          budget:450000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 22,
          releaseDate: "2019-08-15",
          director: "Marc Cherry",
          featuredSong: "Why women kill",
          budget:300000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId:23,
          releaseDate: "2020-03-19",
          director: "Mae Martin, Charlotte Ritchie, Phil Burgers",
          featuredSong: "Everything Goes Right",
          budget:25000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 24,
          releaseDate: "2009-09-23",
          director: "Steven Levitan, Christopher Lloyd",
          featuredSong: "In The Moonlight (Do Me)",
          budget:875000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 25,
          releaseDate: "2015-02-11",
          director: "Dan Levy, Eugene Levy",
          featuredSong: "Simply the Best ",
          budget:100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 26,
          releaseDate: "2021-05-27",
          director: "Ben Winston",
          featuredSong: "Delicate",
          budget:25000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 27,
          releaseDate: "2021-01-15",
          director: "Jac Schaeffer",
          featuredSong: "Genesis",
          budget:225000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 28,
          releaseDate: "2006-05-1",
          director: "Chuck Lorre, Bill Prady",
          featuredSong: "History of Everything ",
          budget:251000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 29,
          releaseDate: "2020-02-7",
          director: "Charlie Day",
          featuredSong: "Meltdown",
          budget:50000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId:30 ,
          releaseDate: "2015-02-24",
          director: "Darren Star",
          featuredSong: "This Feeling",
          budget:100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 31,
          releaseDate: "2013-09-17",
          director: "Dan Goor",
          featuredSong: "Beautiful",
          budget:612000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 32,
          releaseDate: "2021-07-30",
          director: "David Charhon",
          featuredSong: "Intuition",
          budget:60000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 33,
          releaseDate: "2021-06-11",
          director: "Jon M. Chu",
          featuredSong: "In the Heights ",
          budget: 55000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 34 ,
          releaseDate: "1994-06-22",
          director: "David Crane, Marta Kauffman",
          featuredSong: "I'll Be There For You",
          budget:130000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 35,
          releaseDate: "2005-03-27",
          director: "Shonda Rhimes",
          featuredSong: "Grace",
          budget: 350000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 36,
          releaseDate: "2021-08-27",
          director: "Lisa Joy",
          featuredSong: "Only One",
          budget: 68000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 37,
          releaseDate: "2013-03-03",
          director: "Michael Hirst",
          featuredSong: "Rollo Tries to Regain Ragnar's Trust",
          budget: 240000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId:38,
          releaseDate: "2020-10-16",
          director: "Lance Hool",
          featuredSong: "All My Tomorrows ",
          budget:15000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId:39,
          releaseDate: "2020-03-19",
          director: "Mae Martin",
          featuredSong: "Everything Goes Right",
          budget: 100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 40,
          releaseDate: "2011-09-01",
          director: "Julian Fellowes",
          featuredSong: "O Mio Babbino Caro ",
          budget: 78000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 41,
          releaseDate: "2019-09-23",
          director: "Steven Levitan",
          featuredSong: "Circle Of Life ",
          budget: 420000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 42,
          releaseDate: "2014-08-09",
          director: "Ronald D. Moore",
          featuredSong: "The Skye Boat Song ",
          budget: 60000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 43,
          releaseDate: "2021-05-27",
          director: "Ben Winston",
          featuredSong: "Delicate",
          budget: 826000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 44,
          releaseDate: "2006-05-01",
          director: "Chuck Lorre",
          featuredSong: "History of Everything (The Big Bang Theory Theme)",
          budget: 100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 45,
          releaseDate: "2015-02-24",
          director: "Darren Star",
          featuredSong: "Younger",
          budget: 140000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 46,
          releaseDate: "2016-09-24",
          director: "Dan Fogelman",
          featuredSong: "You Can Call Me AI",
          budget: 143000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 47,
          releaseDate: "2021-02-23",
          director: "Greg Berlanti",
          featuredSong: "Superman and Lois",
          budget: 80000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 48,
          releaseDate: "2021-09-19",
          director: "Carter Bays",
          featuredSong: "Hey Beautiful ",
          budget: 105000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 49,
          releaseDate: "2020-06-17",
          director: "Isaac Aptaker",
          featuredSong: "Fletcher",
          budget: 230000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 50,
          releaseDate: "2021-07-08",
          director: "Joshua Safran",
          featuredSong: "Breakfast in NYC",
          budget: 75000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 51,
          releaseDate: "2009-09-10",
          director: "Julie Plec",
          featuredSong: "Cut",
          budget: 60000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 52,
          releaseDate: "2018-09-26",
          director: "D.J. Nash",
          featuredSong: "All These Things That I've Done ",
          budget: 50000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 53,
          releaseDate: "2019-06-28",
          director: "Danny Boyle",
          featuredSong: "Summer Song ",
          budget: 135000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 54,
          releaseDate: "2005-09-13",
          director: "Hart Hanson",
          featuredSong: "Bones Theme (Squints Mix By DJ Corporate) ",
          budget: 100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 55,
          releaseDate: "1995-07-19",
          director: "Amy Heckerling",
          featuredSong: "Just a Girl",
          budget:12000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 56,
          releaseDate: "2018-11-27",
          director: "Sanjay Kumar Daryani, Bhavna Rawail, Baljit Singh chaddha",
          featuredSong: "Ye Kya Hua",
          budget:50000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 57,
          releaseDate: "2020-12-25",
          director: "Chris Van Dusen",
          featuredSong: "Thank You Next",
          budget:126000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 58,
          releaseDate: "2004-04-9",
          director: "Luke Greenfield",
          featuredSong: "Christmas Song",
          budget:25000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 59,
          releaseDate: "2020-04-15",
          director: "Shannon Burke, Jonas Pate, Josh Pate",
          featuredSong: "Left Hand Free",
          budget: 50000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 60,
          releaseDate: "1997-12-19",
          director: " James Cameron",
          featuredSong: "My Heart Will Go On",
          budget: 200000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 61,
          releaseDate: "2021-03-05",
          director: "Zach Parrish",
          featuredSong: "Lead the Way",
          budget:100000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 62,
          releaseDate: "2021-06-25",
          director: "Justin Lin",
          featuredSong: "I Won",
          budget:200000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 63,
          releaseDate: "2021-03-31",
          director: "Adam Wingard",
          featuredSong: "The Air That I Breathe",
          budget:200000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 64,
          releaseDate: "2017-11-3",
          director: "Taika Waititi",
          featuredSong: "Frisky Bizness",
          budget:180000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 65,
          releaseDate: "2008-07-18",
          director: "Christopher Nolan",
          featuredSong: "Andante from String Quartet in a minor D. 804, 'Rosamunde'",
          budget:185000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 66,
          releaseDate: "2000-05-5",
          director: "Ridley Scott",
          featuredSong: "Now We Are Free",
          budget:103000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 67,
          releaseDate: "1993-06-11",
          director: "Steven Spielberg",
          featuredSong: "Las Gaviotas",
          budget:63000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 68,
          releaseDate: "2017-08-18",
          director: "Patrick Hughes",
          featuredSong: "Ain't No Love in the Heart of the City",
          budget:30000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 69,
          releaseDate: "2019-07-2",
          director: "Jon Watts",
          featuredSong: "A Message To You, Rudy",
          budget:160000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 70,
          releaseDate: "2001-12-19",
          director: "Peter Jackson",
          featuredSong: "Frisky Bizness",
          budget:93000000,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 71,
          releaseDate: "2018-04-27",
          director: "Anthony Russo, Joe Russo",
          featuredSong: "The Rubberband Man",
          budget:321000000,
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
