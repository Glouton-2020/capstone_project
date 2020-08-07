const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    expected: {
        type: String
    },
    service: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);