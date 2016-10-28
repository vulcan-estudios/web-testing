// MongoDB setup.
// This script is executed when the authentication and security is down.

use admin;

db.createUser({
  user: 'superadmin',
  pwd: '12345678',
  roles: [ 'root' ]
});

use appdb;

db.createUser({
  user: 'programmer',
  pwd: '12345678',
  roles: [{
    db: 'appdb',
    role: 'readWrite'
  }]
});

db.auth('programmer', '12345678');

db.createCollection('users');

const usersList = [{
  	"_id" : ObjectId("5813bc184b57665d404678bc"),
  	"name" : "Pepe Pérez",
  	"email" : "pepeperez@mail.com",
  	"pwd" : "11111111"
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678bd"),
  	"name" : "María Rodriguez",
  	"email" : "mariarodriguez@mail.com",
  	"pwd" : "22222222"
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678be"),
  	"name" : "Carlos Martínez",
  	"email" : "carlosmartinez@mail.com",
  	"pwd" : "33333333"
  }, {
  	"_id" : ObjectId("5813bc184b57665d404678bf"),
  	"name" : "Sandra Molina",
  	"email" : "sandramolina@mail.com",
  	"pwd" : "44444444"
}];

usersList.forEach(function (user) {
  db.users.insert(user);
});
