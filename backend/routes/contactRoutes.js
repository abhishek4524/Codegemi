const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const validator = require('validator');

// Create new contact submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, agree } = req.body;
    
    // Basic validation
    if (!name || !email || !message || agree === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, message, and agreement are required'
      });
    }
    
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }
    
    if (phone && !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number'
      });
    }
    
    if (!agree) {
      return res.status(400).json({
        success: false,
        message: 'You must agree to the terms and privacy policy'
      });
    }
    
    // Create new contact
    const newContact = new Contact({
      name,
      email,
      phone: phone || undefined,
      subject: subject || 'subject',
      message,
      agree,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });
    
    // Save to database
    const savedContact = await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email
      }
    });
    
  } catch (error) {
    console.error('Error creating contact:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// Get all contacts (for admin panel)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    const query = {};
    if (status && ['new', 'read', 'replied', 'archived'].includes(status)) {
      query.status = status;
    }
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const total = await Contact.countDocuments(query);
    
    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contact
    });
    
  } catch (error) {
    console.error('Error fetching contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update contact status
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['new', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Valid status is required'
      });
    }
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });
    
  } catch (error) {
    console.error('Error updating contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Delete contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;