const mongoose = require("mongoose")

const MoviesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,
        unique: true
    },
    img:{
        type: String,
    },  
    imgTitle:{
        type: String,
    },  
    imgSmall:{
        type: String,
    },
    trailer: {
        type: String,
    },
    video: {
        type: String,
    }, 
    year: {
        type: String,
    }, 
    limit: {
        type: String,
    }, 
    genre: {
        type: String,
    }, 
    isSeries: {
        type: Boolean,
        default: false,
    }, 
},
{timestamps: true}
)

module.exports = mongoose.model("Movie", MoviesSchema)