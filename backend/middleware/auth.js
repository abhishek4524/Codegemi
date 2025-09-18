const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.headers['authorization'];
    
    // Debug log
    console.log('Auth Middleware - Received Token:', token);
    console.log('Auth Middleware - Request Headers:', req.headers);
    
    if (!token) {
        console.log('Auth Middleware - No token provided');
        return res.status(401).json({ error: 'No token provided' });
    }
    
    try {
        // Remove 'Bearer ' prefix if present
        const tokenWithoutBearer = token.replace('Bearer ', '');
        console.log('Auth Middleware - Token after processing:', tokenWithoutBearer);
        
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET || 'supersecretkey');
        console.log('Auth Middleware - Decoded Token:', decoded);
        
        req.userId = decoded.userId;
        console.log('Auth Middleware - User ID set:', req.userId);
        
        next();
    } catch (err) {
        console.log('Auth Middleware - Token verification failed:', err.message);
        res.status(401).json({ error: 'Invalid token' });
    }
};