const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// Get all crops
router.get('/', async (req, res) => {
    try {
        const crops = await Crop.find();
        res.json(crops);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add a crop
router.post('/', async (req, res) => {
    try {
        const newCrop = new Crop(req.body);
        const savedCrop = await newCrop.save();
        res.status(201).json(savedCrop);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
