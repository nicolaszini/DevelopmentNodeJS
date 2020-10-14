const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        default: '',
        required: true
    },
    abbr: {
        type: String,
        default: '',
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: '',
        required: true
    }
},{
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;