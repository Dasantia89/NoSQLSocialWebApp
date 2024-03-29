const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: new Date,
            get: (date) => date.toLocaleDateString()

        }
    },
    {
        toJSON: {
            getters: true
        },
    }

);


module.exports = reactionSchema;