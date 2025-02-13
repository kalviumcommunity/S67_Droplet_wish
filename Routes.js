const express = require('express');
const router = express.Router();
const Droplet = require('./droplet'); // Ensure correct path

// Create a new droplet
router.post('/droplets', async (req, res) => {
    try {
        const droplet = new Droplet(req.body);
        await droplet.save();
        res.status(201).json(droplet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all droplets
router.get('/droplets', async (req, res) => {
    try {
        const droplets = await Droplet.find();
        res.json(droplets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single droplet by ID
router.get('/droplets/:id', async (req, res) => {
    try {
        const droplet = await Droplet.findById(req.params.id);
        if (!droplet) return res.status(404).json({ message: 'Droplet not found' });
        res.json(droplet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a droplet by ID
router.put('/droplets/:id', async (req, res) => {
    try {
        const droplet = await Droplet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!droplet) return res.status(404).json({ message: 'Droplet not found' });
        res.json(droplet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a droplet by ID
router.delete('/droplets/:id', async (req, res) => {
    try {
        const droplet = await Droplet.findByIdAndDelete(req.params.id);
        if (!droplet) return res.status(404).json({ message: 'Droplet not found' });
        res.json({ message: 'Droplet deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;