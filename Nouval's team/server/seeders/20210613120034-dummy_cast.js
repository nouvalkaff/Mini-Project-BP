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
      "Casts",
      [
        //Angg
        {
          nameCast: "Hugh Jackman" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_FMjpg_UX1000_.jpg",
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Michelle Williams" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjExNjY5NDY0MV5BMl5BanBnXkFtZTgwNjQ1Mjg1MTI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Zac Efron" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTUxNzY3NzYwOV5BMl5BanBnXkFtZTgwNzQ3Mzc4MTI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Russell Crowe" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Anne Hathaway" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_FMjpg_UX1000_.jpg",
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Amanda Seyfried" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTYwMDYyMDY5Nl5BMl5BanBnXkFtZTcwODkyMjY5Ng@@._V1_FMjpg_UX1000_.jpg",
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jonah Hill" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTUyNDU0NzAwNl5BMl5BanBnXkFtZTcwMzQxMzIzNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Margot Robbie" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Matthew McConaughey" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lady Gaga" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTg1NjQwMzU4MF5BMl5BanBnXkFtZTgwNTk5NjQ4NjE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Bradley Cooper" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sam Elliott" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU0NTk4NDgzMl5BMl5BanBnXkFtZTYwNjU5Nzc1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Rami Malek" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lucy Boynton",
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTk4ZWI3ZDktNzBiYS00MzdiLTk2MDEtOWNlOTY0ZDg3NDBhXkEyXkFqcGdeQXVyODY2MTA2OTg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Gwilym Lee" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzNmM2M4ZjAtNzkzNy00NzczLWE3MmItMjkyMmI2MGQ2ODNhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Carey Mulligan" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjQ1NGM2ODUtODc3Ny00ZjdhLTljNzEtMmY2M2M2MDY2Y2IzXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Joel Edgerton" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTA0ODI1ODk4NzdeQTJeQWpwZ15BbWU3MDkwNjkzOTY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Isla Fisher" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODY3MDQ4MTQ4Nl5BMl5BanBnXkFtZTgwNDU2NzU1MDE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Brad Pitt" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Cate Blanchett" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tilda Swinton" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM4NzMzMTkwNV5BMl5BanBnXkFtZTcwMzU4MDg1Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Will Smith" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Thandiwe Newton" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjMzNTAxNDUwNV5BMl5BanBnXkFtZTcwMjMyNjI5MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jaden Smith" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjMwMjU2MTQ4MF5BMl5BanBnXkFtZTgwODM5OTMzODE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Benedict Cumberbatch" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Keira Knightley" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTYwNDM0NDA3M15BMl5BanBnXkFtZTcwNTkzMjQ3OA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Matthew Goode" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTY5MDI4NzkxOV5BMl5BanBnXkFtZTgwNzc2MzU0MzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tom Hanks" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Helen Hunt" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM1OTk1ODIwMV5BMl5BanBnXkFtZTcwMTA0MTIwOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Paul Sanchez" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZGU0ODgzYzEtZTI4OC00OGIwLTgwZDYtNWE3ZjhkZTU0NTdlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Eddie Redmayne" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU0MjEyNzQyM15BMl5BanBnXkFtZTcwMTc4ODUxOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Felicity Jones" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA0MTIwMzIyN15BMl5BanBnXkFtZTgwNDEyMzg1NDE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tom Prior" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjIwMjQzNDUzN15BMl5BanBnXkFtZTgwNzI1MDU4MDE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Djimon Hounsou" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjQ2NTM4MzI4M15BMl5BanBnXkFtZTcwOTkxMjcxNA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jennifer Connelly " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOTczNTgzODYyMF5BMl5BanBnXkFtZTcwNjk4ODk4Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //===========================================================
       //B
       //13
        {
          nameCast: "Emma Stone" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Emma Thompson" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTMwNTAyOTg0MF5BMl5BanBnXkFtZTcwNTg0MzY1Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Joel Fry" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTY2OTU0NzM1MV5BMl5BanBnXkFtZTgwMzM5ODU5NTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //14
        {
          nameCast: "Manoj Bajpayee" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzUxODk5MmEtZGQxOC00NzUxLWI5YTEtYWFjMjZmZTIwNTA5XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Samantha Akkineni" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjQ4M2MzMTYtN2JlMS00NGFiLThiZTAtOWFlZTVhNjU2ZmY2XkEyXkFqcGdeQXVyNzAyMjc0NTg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Femal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Priyamani" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZGE5MjQwYjEtNGE0NC00YTQ3LTliYWQtMjQ0MTYxNTBkYWQ4XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //15
        {
          nameCast: "Jennifer Aniston" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Courteney Cox" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lisa Kudrow" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //16
        {
          nameCast: "Michael Douglas" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sarah Baker" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQzNjg5NDg1NF5BMl5BanBnXkFtZTgwMDM0MTcyMTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Graham Rogers" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOGFkNjFjOTItNmEzYi00MThmLTk2MWYtM2ZlZDY4ZGQwMWQ1XkEyXkFqcGdeQXVyNzE5NjIzNjU@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //17
        {
          nameCast: "Jean Smart" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjAwNjg0MjUxMF5BMl5BanBnXkFtZTcwMTcyNjY0MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Hannah Einbinder" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BM2Q5YTUzOTItOWE5Ni00M2ExLWJhZGUtZWMxMjQ5NjY0NGQwXkEyXkFqcGdeQXVyOTQ5ODYwMjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Carl Clemons-Hopkins" ,
          profileCast: "https://s3.amazonaws.com/ataimages/crops/283124/1_cropped.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //18
        {
          nameCast: "Bo Burnham" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzFjZDZjODItZmIyOC00ZWIzLTljMTktYzU5NzJkOGJjYWE3XkEyXkFqcGdeQXVyMTk3NzExNDQ@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //19
        {
          nameCast: "Karl Urban" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU2Njg3MDgyN15BMl5BanBnXkFtZTcwNjgyNTA4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jack Quaid" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BY2Y2MmIzOGEtNTgyYi00OWUyLTljNzEtYmFlOWU2MzFkZTg1XkEyXkFqcGdeQXVyMjYyNDg5NzY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Antony Starr" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQxMDg1Nzc0OV5BMl5BanBnXkFtZTcwODc4NTkyNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //20
        {
          nameCast: "LeBron James" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzE2NzEwMTUxM15BMl5BanBnXkFtZTYwMzQ4NTQz._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Zendaya" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Don Cheadle" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDMxNDM3MzY5N15BMl5BanBnXkFtZTcwMjkzOTY4MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //21
        {
          nameCast: "Steve Carell" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jenna Fischer" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTMyOTYzODQ5MF5BMl5BanBnXkFtZTcwMjE3MDgzMQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "John Krasinski" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //22
        {
          nameCast: "Jack Davenport" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjEyMmNkMGQtMGY1OC00N2RjLWIxYzktZjFkM2VhMjFmMzQ2XkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lucy Liu" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOTgxODE0MjI5Ml5BMl5BanBnXkFtZTcwMjkxMzMzMg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Allison Tolman" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMmU5ZTJmN2ItZmI0OC00NTQ3LWI0YzktMDNkNjkwNDg2OTVlL2ltYWdlXkEyXkFqcGdeQXVyMTkyNjMwNzc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //23
        {
          nameCast: "Mae Martin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzhkYmI4ZDgtNjFkMy00OGFmLWIxYmQtODk2MTkxOGMzYjg5XkEyXkFqcGdeQXVyMjEyMTU0MzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Charlotte Ritchie" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjk5Zjk3ZjktMDBkNi00OWZmLTg5Y2YtZjE4YzVjZmI5NTNjXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Phil Burgers" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BN2JmMWMxZWEtYTY3Zi00NzYwLWE3ZDktNWNlODZkZmY4M2U4XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //24
        {
          nameCast: "Ed O'Neill" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNTI2NjcyODk0NV5BMl5BanBnXkFtZTgwNTMxODc4NzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sofía Vergara" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU2MjcyMDg1OV5BMl5BanBnXkFtZTgwMTgwMzQwMDI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Julie Bowen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjIxMjI3ODI5M15BMl5BanBnXkFtZTcwNjIyNTA0NA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //25
        {
          nameCast: "Eugene Levy" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM0NTQ5NjA3Ml5BMl5BanBnXkFtZTYwMDgwMjQ1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Catherine O'Hara" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc5MzA0NjYwN15BMl5BanBnXkFtZTYwODk4NTE2._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Dan Levy" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BY2ZhOWMzZWMtMTNkMi00YmRjLTljOTEtZjhkNmI3NjlmZjM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //26
        {
          nameCast: "Jennifer Aniston" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Courteney Cox" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lisa Kudrow" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //27
        {
          nameCast: "Elizabeth Olsen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Paul Bettany" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjUzMDIzNjkxMl5BMl5BanBnXkFtZTgwNjgyNzA0MjI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kathryn Hahn" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjE1OTcxNDczMl5BMl5BanBnXkFtZTcwMDA1NDcyMQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //28
        {
          nameCast: "Johnny Galecki" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzQ2ODY0MTIwMV5BMl5BanBnXkFtZTcwNDQ2NzMzMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jim Parsons" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTg1MTkxODgzMF5BMl5BanBnXkFtZTgwMjExMjgyNzM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kaley Cuoco" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjYyYmNlZTMtM2RlZC00YTlhLTk5YzItZTQ4OTA3Y2FkNzFlXkEyXkFqcGdeQXVyOTAzMjY1OTY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //29
        {
          nameCast: "Charlotte Nicdao" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODE3N2I4Y2MtY2ZmNC00YzJlLTg4ZGYtMDc2MmNiNDdmMzk2XkEyXkFqcGdeQXVyODMzMTM1MDc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Rob McElhenney" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZjUwYWUxMjctN2JkNC00MTVjLWI0MDAtODQ1ZTkwMGM0MTIyXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "F. Murray Abraham" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDQ2MzQ2ODYxM15BMl5BanBnXkFtZTcwODY3NTIxNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //30
        {
          nameCast: "Sutton Foster" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA2MDQ4MjI2MV5BMl5BanBnXkFtZTcwNDc4OTI2Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Hilary Duff" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTk5OTU1NzIzNF5BMl5BanBnXkFtZTcwMTg3MjM3Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Debi Mazar" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODgyNTQxMjM5NV5BMl5BanBnXkFtZTcwOTExOTAyMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //31
        {
          nameCast: "Andy Samberg" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDg3NDk3ODI0Ml5BMl5BanBnXkFtZTgwOTE3MTE4NTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Stephanie Beatriz" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYWY3ZGQ0OGUtZDNjYi00MmRkLWE4YmMtYzk3MzAwZjQxMDRlXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Terry Crews" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjE1ODY0NzE4N15BMl5BanBnXkFtZTcwMTY5Mzk0Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //32
        {
          nameCast: "Jean-Claude Van Damme" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTA2OTE1Njg4NjVeQTJeQWpwZ15BbWU3MDAyNjU4MDM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alban Ivanov" ,
          profileCast: "https://www.fnactickets.com/static/0/visuel/300/205/ALBAN-IVANOV_2053892387385639256.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Samir Decazza" ,
          profileCast: "https://i1.sndcdn.com/avatars-000565956486-w8ig7d-t500x500.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //============================================================
        //AMAL
        {
          nameCast: "Anthony Ramos" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMmM5YjA4ZDktM2I1NC00ZWRhLThjMzItZGZhNTRlMTdkZGVkXkEyXkFqcGdeQXVyNTkyMTE5Nzg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Leslie Grace" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYTM3OWZhNTUtMzFmYy00NWZmLWJiYTYtNDNlMjIxOTJjMDI3XkEyXkFqcGdeQXVyMTA2MDY0MTE2._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Olga Merediz" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMWZlZTM3YmItZDQzOS00NzZjLWE5YTktOGJlNDkwNjZiMzlmXkEyXkFqcGdeQXVyMDU1MzE2MA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jennifer Aniston" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lisa Kudrow" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Matthew Perry" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Ellen Pompeo" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTI4NDc2NjA0OV5BMl5BanBnXkFtZTcwNTI1NDg1MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "James Pickens Jr." ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA4NDAyNjkwOF5BMl5BanBnXkFtZTcwODg4Mzk5MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kevin McKidd" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM5NjUxNTQ3OV5BMl5BanBnXkFtZTcwOTg4Mjc5Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Rebecca Ferguson" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzA4NDA1MTA5NV5BMl5BanBnXkFtZTcwNjMyNTQ3OA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Hugh Jackman" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Brett Cullen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTI0NzI0MzU1M15BMl5BanBnXkFtZTcwMjM0Mjg3MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Katheryn Winnick" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZWE3NGE3NWUtNDA4NC00ODYyLThmMTgtNjQ4Y2ZkYzdmMmQ5XkEyXkFqcGdeQXVyMTE1MzA3MTI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alexander Ludwig" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjc2NTQyZTItZTExYy00YzRmLTk3ZDMtZTA2M2UwODE4OTM3XkEyXkFqcGdeQXVyMTQyOTM4MzU@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alex Høgh Andersen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZDI2MzBlZGYtZWRlOC00YjY4LWFiNWItM2M0Njc1YTg3ZGRkXkEyXkFqcGdeQXVyNDEzNzU5MTk@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Radha Mitchell" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMGFiZGIxZTAtYTM5NS00ZGZiLWE3OTgtNmQ3ZjNhMzIwZDRlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tiera Skovbye" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOWQwY2IyN2UtODYzMC00OWIzLTgxM2EtNjYxYTllOGM2MTZlXkEyXkFqcGdeQXVyMTY3ODMzNzU@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kari Matchett" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQwMjAwOTE4OV5BMl5BanBnXkFtZTcwMDQwODMzMQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Mae Martin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzhkYmI4ZDgtNjFkMy00OGFmLWIxYmQtODk2MTkxOGMzYjg5XkEyXkFqcGdeQXVyMjEyMTU0MzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Phil Burgers" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BN2JmMWMxZWEtYTY3Zi00NzYwLWE3ZDktNWNlODZkZmY4M2U4XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Lisa Kudrow" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Hugh Bonneville" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZWQ3YTEzYTYtMDc5Yy00Y2I3LWE4NzQtZGRkZGVmNzMyN2FjXkEyXkFqcGdeQXVyMDI4NTY0Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Elizabeth McGovern" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjI3MzM5ODYyNF5BMl5BanBnXkFtZTcwODIwNzk4Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Laura Carmichael" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMDY5Y2Q0NWQtZGY3NC00NGQyLWE3YjktODZlZDgzY2JiMjIzXkEyXkFqcGdeQXVyMjMxNzgyMjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Ed O'Neill" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNTI2NjcyODk0NV5BMl5BanBnXkFtZTgwNTMxODc4NzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Julie Bowen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjIxMjI3ODI5M15BMl5BanBnXkFtZTcwNjIyNTA0NA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jesse Tyler Ferguson" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTczODUyNDMwNF5BMl5BanBnXkFtZTgwNjQ1OTE2MDE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Caitriona Balfe" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZTM4ZDBhYWMtZmQ0Ny00YjI0LWFhMTEtM2IwNmZlZGQwYzJhXkEyXkFqcGdeQXVyMjA2Nzk2MDc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Duncan Lacroix" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZWQ2ODQwMDctNDVkNy00NWFlLWFmMWQtNDdhMDVkM2YxMTA1XkEyXkFqcGdeQXVyNTQ4MTI3NDI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Richard Rankin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA5OTkwNTI0MV5BMl5BanBnXkFtZTgwNzg3NzI3NzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jennifer Aniston" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Courteney Cox" ,
          profileCast: "ttps://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Matt LeBlanc" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Johnny Galecki" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzQ2ODY0MTIwMV5BMl5BanBnXkFtZTcwNDQ2NzMzMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kaley Cuoco" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjYyYmNlZTMtM2RlZC00YTlhLTk5YzItZTQ4OTA3Y2FkNzFlXkEyXkFqcGdeQXVyOTAzMjY1OTY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kunal Nayyar" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQzMzQyMTYyM15BMl5BanBnXkFtZTcwNjYyMDI5Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sutton Foster" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA2MDQ4MjI2MV5BMl5BanBnXkFtZTcwNDc4OTI2Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Debi Mazar" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODgyNTQxMjM5NV5BMl5BanBnXkFtZTcwOTExOTAyMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Miriam Shor" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTg2NDI0Nzc5M15BMl5BanBnXkFtZTYwMTgxNzM1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Milo Ventimiglia" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZWFlMjU0OWYtNDI3Mi00MmVmLWFkNjUtNWVkYWJhYjNlMDdiXkEyXkFqcGdeQXVyOTE0NjgwMjY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sterling K. Brown" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZmEzNmExM2ItNzg5Zi00NGRjLWI1NTEtMmQ5MGMwNjFlNWFhL2ltYWdlXkEyXkFqcGdeQXVyMTM0MzI5Nzc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Justin Hartley" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzk5ODQxNDY3MV5BMl5BanBnXkFtZTgwNjMwNTk2OTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tyler Hoechlin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYmRiYTdhYzUtN2VlYS00ZThiLTkzYTgtMGIzNzIwODY3MjlhXkEyXkFqcGdeQXVyMTE3NDgwNA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alex Garfin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzcyNjVmNjItNDkxNC00OWQxLWI1Y2MtM2QwOWIzZmE5YzI5XkEyXkFqcGdeQXVyNjc4MTY4OTY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Inde Navarrette" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODg4NWYwYWQtNGY2Ny00ZTdhLThlMGQtMmFiOTY3YmUxOWQ2XkEyXkFqcGdeQXVyOTEzMjEyMjg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Josh Radnor" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjAwNTUxMTM4OF5BMl5BanBnXkFtZTcwNjUyNzc4Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Cobie Smulders" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BN2ViYjA1NzAtMTU0NS00NTc4LThmNGItZDJlNzY4YjQ2OWMwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alyson Hannigan" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTkxODc5ODI5OV5BMl5BanBnXkFtZTcwNzExOTUyNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Michael Cimino" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNDU5ZTI4MTYtZDU5NC00NzgyLWJjOTUtODE0MTcwOTZhMDc4XkEyXkFqcGdeQXVyODQzMjkxNzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Anthony Turpel" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzc5ZGRlYWQtYzM1ZS00MDBlLTkxNTQtOGZkMzgyODYzYThlXkEyXkFqcGdeQXVyNDkxNTU0MDE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Mason Gooding" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYzE5OTE1NDQtY2NkOS00Y2I5LWI3YzctZTUyODM5MGQ0NGViXkEyXkFqcGdeQXVyMjcxNDAzNQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Kristen Bell" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA1Njc0MTUzN15BMl5BanBnXkFtZTgwNTg1MjEwNDI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Eli Brown " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTY0NTI2Mjc1NV5BMl5BanBnXkFtZTgwNDg2MTA3NzM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Thomas Doherty" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMWYwMjk5MGUtMDk5ZC00N2FhLTlkZGUtODA4YzA0ZDA2MTQxXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Nina Dobrev" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzliNzA0OTktMTE3Ny00OWY2LTllY2ItY2UwZmI2OGRmYTI2XkEyXkFqcGdeQXVyMTM5NDMzMjY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Ian Somerhalder" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTg2NDAyOTQ0N15BMl5BanBnXkFtZTgwNzM4NDI1OTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Candice King" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZDA1OWQ4ZGYtYjdmOS00MjgyLThjMzUtZGFiODFlMDFmOTcwXkEyXkFqcGdeQXVyMTA1ODAyOTI1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "David Giuntoli" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BODQ0NTM3ZDgtZjJiOC00M2Y3LWI5NGItOTg0Y2FjYWU2YjkzXkEyXkFqcGdeQXVyNzcxMTM1Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Allison Miller" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjM3ZDc5N2MtYTJlOS00YmU2LWI4ZmYtMzFlNjY4NGM5NTRmXkEyXkFqcGdeQXVyMTEzNTE4Mjk0._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Grace Park" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM1OTg1MjI0MF5BMl5BanBnXkFtZTcwODgyMjU5MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Himesh Patel" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzYzN2NhMjYtYWJhYS00NjkxLWEzM2UtMzRhNThmMzhiNGEwXkEyXkFqcGdeQXVyOTM3ODc5OTU@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sophia Di Martino" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYjk4YmMyOWYtMzlhZS00Yjg4LTk0NjQtNDdmMmViMzk3MDZhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Meera Syal" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ5MjU5NzQ1NF5BMl5BanBnXkFtZTgwMjYxODk1MzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Emily Deschanel" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTYzNjY2OTYzM15BMl5BanBnXkFtZTcwNzM2Njg0Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Michaela Conlin" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZDU0OTgzY2MtMGQwZi00ZTUzLTg2MDgtNjVkNTAwMTA5NTY2XkEyXkFqcGdeQXVyMjU3Mjk0OQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tamara Taylor" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZjllYTljMjItNjdmYS00NzM5LWI3YjctNDI5ZmZiNzA4NGE4XkEyXkFqcGdeQXVyODg1MzE3MTQ@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alicia Silverstone" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZDI5ODc5NzItNTJhYS00YWRkLTljMGMtYTM4YTgzMWY5MzYzXkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Brittany Murphy" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc4MjM0MzMwNl5BMl5BanBnXkFtZTYwMTU4NDg1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Donald Faison" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ1NDQ2MzA2NV5BMl5BanBnXkFtZTcwODQ0MzUwNA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Vikrant Massey" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNTQ1Y2E3ZTAtY2Q4Yi00M2Q5LWJjZmItM2M4MGU1Y2Q5NTc4XkEyXkFqcGdeQXVyOTQyMDYwNDM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jitin Gulati" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZTIyODRkY2ItZGQwMC00YWJkLWJmNGQtMDhhZTE3NDQ0MGE0XkEyXkFqcGdeQXVyNjYxMTgzMzQ@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sidharth Shukla" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNTYzYTJhOTktMjBlMy00YzRiLWE3YjEtNzlmZTk4MGJlYjAwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Phoebe Dynevor" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOWUwMjViNTgtYmY5NS00MDIzLThmYzAtMGU4YTk4MWE2YmVjXkEyXkFqcGdeQXVyNTE0MzM2NzI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Nicola Coughlan" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzE0ODY1NzQtMTMxOC00ZTJjLWJiNjYtMTg4MDhmNjBkMjlkXkEyXkFqcGdeQXVyMTE5MTQ1OTQ2._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Harriet Cains" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOGFjYjM5MzctYjdkZi00Y2M1LWIzZDktNGJlZmMyMWU2MzljXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Emile Hirsch" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZjM4OTg0NTMtN2NmNS00ZGVjLWFmNWEtZDZiY2Y1ZDFjYWYzXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Elisha Cuthbert" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ1Mzg3NTA0OF5BMl5BanBnXkFtZTcwNTgyNTM5OQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "James Remar" ,
          profileCast: "ttps://m.media-amazon.com/images/M/MV5BMTQ2ODE1MjQ0Nl5BMl5BanBnXkFtZTgwMzg0NzYyNTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Chase Stokes" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMDZlMzA0NjktMWRhYy00OTAyLTk1ODMtOTViM2JjMzM4NjhjXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Madison Bailey" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYmMwYjM0NWUtYzBhYi00MzFlLWJlYTktYjVkNDNlMmNhYzU0XkEyXkFqcGdeQXVyNTg3Mzk0Mzc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jonathan Daviss" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZWNkMTNmYmUtNWQ2Yy00YzkzLWI2ZWItMjc0MTcxMzhmNGIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Leonardo DiCaprio" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Billy Zane" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTI5NzA2NTE0NF5BMl5BanBnXkFtZTcwNzAxMTUxMw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Frances Fisher " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjI1NjU0ODU0OV5BMl5BanBnXkFtZTgwMzIwOTQ2MTE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //============================================
       //NOUV
        {
          nameCast: "Kelly Marie Tran" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZTQ3OWYyYjktY2JjOC00ODAzLTgxYTItY2NlYjA1ZWVjYjVhXkEyXkFqcGdeQXVyMjY3NzQ2Mzc@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Awkwafina" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU0NTUwNjkyN15BMl5BanBnXkFtZTgwMjM0NzEzMTI@._V1_UY1200_CR116,0,630,1200_AL_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Gemma Chan" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYTI3ZDEwYjktZjVhYS00NTlhLTkwOWEtNjM1MzEyMWU5M2QyXkEyXkFqcGdeQXVyMTE3ODY2Nzk@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Vin Diesel" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Michelle Rodriguez" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYThkMmY1OTYtMTZmNi00YTVmLThkMGItNDlhNzE0ZDZkNGQ0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jordana Brewster" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc1OTMwMzM3NF5BMl5BanBnXkFtZTgwMTM5MzIyODE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Alexander Skarsgård" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjQ4ODA5MDU3MV5BMl5BanBnXkFtZTgwMDkzMDg1MzI@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Millie Bobby Brown" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjA5NzA0NzQzMF5BMl5BanBnXkFtZTgwMTQxNjUzNjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Rebecca Hall" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjkzODU4MTQ4OV5BMl5BanBnXkFtZTcwNDU0MTA4NA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Chris Hemsworth" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tom Hiddleston" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Idris Elba" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Christian Bale" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Heath Ledger" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Aaron Eckhart" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTc4MTAyNzMzNF5BMl5BanBnXkFtZTcwMzQ5MzQzMg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Joaquin Phoenix" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BZGMyY2Q4NTEtMWVkZS00NzcwLTkzNmQtYzBlMWZhZGNhMDhkXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Connie Nielsen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BYzZiYTQ4YTAtMzRkMi00ZDZlLWFkZWItNGI2ZTIyODRiYTc4XkEyXkFqcGdeQXVyMjUzMjc2MjE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Sam Neill " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjUyMTU0MzA0MF5BMl5BanBnXkFtZTgwNTA4MTQ4NjM@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Laura Dern" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjI3NzY0MDQxMF5BMl5BanBnXkFtZTcwNzMwMzcyNw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jeff Goldblum" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Ryan Reynolds" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Samuel L. Jackson" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Salma Hayek" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMzkyMTk2NzM2Ml5BMl5BanBnXkFtZTcwNDQ4MjYzMg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Tom Holland" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Jake Gyllenhaal" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Zendaya" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Elijah Wood " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Orlando Bloom" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMjE1MDkxMjQ3NV5BMl5BanBnXkFtZTcwMzQ3Mjc4MQ@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Ian McKellen" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTQ2MjgyNjk3MV5BMl5BanBnXkFtZTcwNTA3NTY5Mg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Robert Downey Jr." ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Mark Ruffalo" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Scarlett Johansson" ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Chris Evans " ,
          profileCast: "https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_FMjpg_UX1000_.jpg" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
