const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { 
            name, 
            email, 
            phone, 
            password, 
            skills, 
            hiringNeeds, 
            meetingDate, 
            meetingTime, 
            timezone, 
            guests 
        } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new User({ 
            name, 
            email, 
            phone, 
            password: hashedPassword,
            skills: skills || [],
            hiringNeeds: hiringNeeds || 'Full-time',
            meetingDate,
            meetingTime,
            timezone: timezone || 'India Standard Time (IST)',
            guests: guests || []
        });
        
        await user.save();
        
        // Registration成功后password exclude करके response भेजें
        const userResponse = user.toObject();
        delete userResponse.password;
        
        res.status(201).json({ 
            message: 'User registered successfully',
            user: userResponse
        });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(400).json({ error: err.message });
        }
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'supersecretkey', { expiresIn: '1d' });
        
        // Password exclude करके response भेजें
        const userResponse = user.toObject();
        delete userResponse.password;
        
        res.json({ token, user: userResponse });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};