const mongoose = require('mongoose');
// username 
// password
// location {state,city}

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    //db gives id

    url: {type: String},

    location: {
        city: {type :String, required: true},
        state: {type :String, required: true} //{state,city}
    
    },
    rating: {
        type: Number
    },
    CreaterId:{
        type: String,
        required: true
    }

});

const Image = mongoose.model('Img', ImageSchema);
module.exports = Image;




//DO NOT DELETE
//signup/signin => user .... userId.

//upload image Image.create({url: '''', userId: })

