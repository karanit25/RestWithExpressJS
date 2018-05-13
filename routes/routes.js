var faker = require("faker");

var appRouter = function (app) {

// This responds with "Welcome to our restful API" on the homepage

  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

// This responds with Single User data created by faker on end point "/user"

  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

// This responds with Number of User data created by faker on end point "/users/:num"
  
 app.get("/users/:num", function (req, res) {
   var users = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email()
        });
     }

     res.status(200).send(users);
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
 
// This responds with UUID created by faker on end point "/uuid"

  app.get("/uuid", function (req, res) {
    var uuidRandom = ({
      uuid: faker.random.uuid()
      });
    res.status(200).send(uuidRandom);
  });
  
// This responds a POST request for end point "/post"
  app.post('/post', function (req, res) {
   console.log("Got a POST request");
   res.send('Hello POST');
});  
}

module.exports = appRouter;