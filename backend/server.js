const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/codegemi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const contactRoutes = require('./routes/contactRoutes'); // Add contact routes

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/contact', contactRoutes); // Use contact routes

// Health Check
app.get('/', (req, res) => {
  res.send('Codegemi Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});