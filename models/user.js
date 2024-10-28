const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 50
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8
    },

    watchList: [
        {
            movie: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            },
            watched: Boolean
        }
    ],

    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Model = mongoose.model('User', ModelSchema)

module.exports = Model