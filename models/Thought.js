const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId : {
            type: ObjectId,
            default : new ObjectId,
        },
        reactionBody : {
            type : String,
            required: true,
            maxlength: 280
        },
        username : {
            type : String,
            require: true
        },
        createdAt : {
            type : Date,
            default : new Date,
        }
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            requited: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: new Date,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]

    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;