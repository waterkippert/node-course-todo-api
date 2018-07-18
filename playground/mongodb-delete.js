// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB');

  //deleteMany
  db.collection('Users').deleteMany({
    name: 'Daniel'
  }).then((result) => {
    console.log(result);
  })
  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat doner'
  // }).then((result) => {
  //   console.log(result);
  // })
  //findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: 123
  }).then((result) => {
    console.log(result);
  })
  // db.close();
});
