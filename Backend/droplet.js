const mongoose = require('mongoose');

const dropletSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Droplet = mongoose.model('Droplet', dropletSchema);

module.exports = Droplet;