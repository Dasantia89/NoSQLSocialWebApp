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

const Reaction = model('reaction', reactionSchema)

module.exports = Reaction;