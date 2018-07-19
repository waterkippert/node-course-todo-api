
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5b503ce91024085263c6709c';

// if (!ObjectID.isValid(id)){
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Find Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Find One Todo ', todo);
// });

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }

  console.log('Find One Todo By Id', user);
}).catch((e) => console.log(e));
