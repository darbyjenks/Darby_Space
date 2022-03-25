const { Schema, model } = require('mongoose');
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //time stamp into regular date.. utils that will take into date
    },
    userName: {
        type: String,
        required: true,
    }},
    {
    toJSON: {
        virtuals: true,
    },
    id: false
})

module.exports = reactionSchema