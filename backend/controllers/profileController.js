
const User = require('../models/User');

exports.getProfile = async (req, res) => {
	const user = await User.findById(req.userId);
	if (!user) return res.status(404).json({ error: 'User not found' });
	res.json(user);
};

// Update profile
router.put('/', auth, async (req, res) => {
  try {
    const { name, phone, location, landSize, crop, soilType, irrigation } = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { name, phone, location, landSize, crop, soilType, irrigation },
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});