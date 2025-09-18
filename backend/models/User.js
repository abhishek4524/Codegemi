const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  skills: [{ type: String }],
  hiringNeeds: { 
    type: String, 
    enum: ['Full-time', 'Part-time'],
    default: 'Full-time'
  },
  meetingDate: Date,
  meetingTime: String,
  timezone: { 
    type: String, 
    default: 'India Standard Time (IST)' 
  },
  guests: [{ type: String }] // For storing guest emails
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);