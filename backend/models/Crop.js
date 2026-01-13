const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    cropName: { type: String, required: true },
    pricePerKg: { type: Number, required: true }
});

module.exports = mongoose.model('Crop', cropSchema);
