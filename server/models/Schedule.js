const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//COME BACK TO FIX THE SCHEMA < SEEKING | OFFERING >
const ScheduleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    author: {
        type: String
    },
    seeking: {
        type: String,
        required: true
    },
    offering: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);