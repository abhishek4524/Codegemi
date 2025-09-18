const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Phone is optional
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v);
      },
      message: 'Please provide a valid phone number'
    }
  },
  subject: {
    type: String,
    default: 'subject',
    enum: ['subject', 'general', 'support', 'feedback', 'complaint', 'other']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  agree: {
    type: Boolean,
    required: [true, 'You must agree to the terms and privacy policy'],
    validate: {
      validator: function(v) {
        return v === true;
      },
      message: 'You must agree to the terms and privacy policy'
    }
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1 });

module.exports = mongoose.model('Contact', contactSchema);