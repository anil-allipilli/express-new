var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    completedAt: {
        type: Number
    }
});

// var newUser = new User({
//     name: 'Anil Kumar',
//     age: 25
// });

// newUser.save()
//         .then((doc) => {
//             console.log("Saved", doc);
//         }, (e) => {
//             console.log('Unable');
//         });

module.exports = {User};