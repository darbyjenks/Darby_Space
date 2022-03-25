const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js');

const thoughtSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //time stamp into regular date.. utils that will take into date
    },
    userName: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
    },{
    toJSON: {
        getters: true,
    },
    id: false
})
thoughtSchema.virtual('reactionCount').get(function () {   
     return this.reactions.length;   
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;

