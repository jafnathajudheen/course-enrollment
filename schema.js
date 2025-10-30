const mongoose = require('mongoose');

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  durationWeeks: {
    type: Number,
    required: true
  },
  instructor: {
    type: String,
    required: true
  }
});

// Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Create models
const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

// Export models
module.exports = { Course, Student };