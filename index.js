
module.exports = function() {
	var faker = require("./faker");

  var data = { users: [], books: [] }
  
	data.users.push(
    	{ 	id: 1, 
    		Name: "Danny",
			LastName: "Feliz",
			Email: "danny@gmail.com",
			Role: 1,
			Password: "123456",
			CreatedAt: faker.date.past(),
			UpdatedAt: faker.date.past(),
		 })

  for (var i = 2; i <= 25; i++) {
    

    data.users.push(
    	{ 	id: i, 
    		Name: faker.name.firstName(),
			LastName: faker.name.lastName(),
			Email: faker.internet.email(),
			Role: faker.random.number(2, 3),
			Password: faker.internet.password(),
			CreatedAt: faker.date.past(),
			UpdatedAt: faker.date.past(),
		 })

    var isRented = faker.random.boolean() ;
    data.books.push(
    	{ 	id: i, 
    		Title: faker.commerce.productName() ,
			Author: faker.name.firstName(),
			Year: i%2 == 0 ? 2017 - i : 2017 - i + 1,
			Publisher: faker.company.companyName() ,
			PageCount: faker.random.number(200, 1200) ,
			Genre: "Anime",
			IsRented: isRented,
			ReturnDate: isRented ? faker.date.future() : ""
		 })
  }

  

  return data

}