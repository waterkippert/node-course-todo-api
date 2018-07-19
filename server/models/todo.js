var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};


// var newTodo = new Todo({
//   text: '   Todo     '
// });
//
// newTodo.save().then((result) => {
//   console.log(`Saved todo '${JSON.stringify(result, undefined, 2)}'`);
// }, (e) => {
//   console.log("Unable to save todo");
// });
