
const User = require('../models/User');

exports.getDashboard = async (req, res) => {
	const user = await User.findById(req.userId);
	res.json({
		user,
		weather: {
			temperature: '29°C',
			condition: 'Cloudy',
			humidity: '80%',
			rainfall: '2mm',
		},
		marketPrices: [
			{ crop: 'Rice', price: '₹35/kg' },
			{ crop: 'Coconut', price: '₹25/piece' },
		],
	});
};
