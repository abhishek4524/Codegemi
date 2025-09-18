// routes/profile.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get user profile
router.get('/', auth, async (req, res) => {
    try {
        console.log('Profile Route - User ID from auth:', req.userId);
        
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            console.log('Profile Route - User not found for ID:', req.userId);
            return res.status(404).json({ error: 'User not found' });
        }
        
        console.log('Profile Route - User found:', user);
        res.json(user);
    } catch (error) {
        console.error('Profile Route - Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Update user profile
router.put('/', auth, async (req, res) => {
    try {
        console.log('Profile Update Route - User ID:', req.userId);
        console.log('Profile Update Route - Request Body:', req.body);
        
        const { name, phone, location, crop, soilType, irrigation } = req.body;
        
        const user = await User.findByIdAndUpdate(
            req.userId,
            { 
                name, 
                phone, 
                location, 
                crop, 
                soilType, 
                irrigation,
                updatedAt: new Date()
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            console.log('Profile Update Route - User not found for update:', req.userId);
            return res.status(404).json({ error: 'User not found' });
        }

        console.log('Profile Update Route - User updated successfully:', user);
        res.json(user);
    } catch (error) {
        console.error('Profile Update Route - Error:', error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;