const { Schema, model } = require('mongoose');

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'tour name is required'],
    unique: true,
  },
  duration: Number,
  price: Number,
  maxGroupSize: {
    type: Number,
    default: 25,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'difficult'],
  },
  ratingsAverage: Number,
  ratingsQuantity: Number,
  summary: String,
  description: String,
  imageCover: String,
  images: [String],
  startDates: [Date],
});

const Tour = model('Tour', tourSchema);

module.exports = Tour;
