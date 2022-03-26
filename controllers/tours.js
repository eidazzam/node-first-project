const Tour = require('../models/Tour');
const { catchAsync } = require('../utils/utils');

module.exports = {
  findTourById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    if (tour === null) {
      return next({
        status: 'failure',
        message: 'Tour not found',
      });
    }
    req.tour = tour;
    next();
  }),
  getAllTours: catchAsync(async (req, res) => {
    let query = JSON.stringify(req.query);
    query = query.replace(/(gt|gte|lt|lte)/, (match) => `$${match}`);
    let tours = Tour.find(JSON.parse(query));

    if (req.query.fields !== undefined) {
      tours = tours.select(req.query.fields.replace(',', ' '));
    }

    if (req.query.page !== undefined) {
      const limit = req.query.limit || 10;
      tours.skip((+req.query.page - 1) * limit);
      tours.limit(limit);
    }
    console.log('myheader', res.headers);
    res.json({
      status: 'success',
      data: await tours,
    });
  }),
  getTourById: catchAsync(async (req, res) => {
    res.json({
      status: 'success',
      data: req.tour,
    });
  }),
  createTour: catchAsync(async (req, res) => {
    const tour = await Tour.create(req.body);
    res.json({
      status: 'success',
      data: tour,
    });
  }),
  updateTour: catchAsync(async (req, res) => {
    const { id } = req.params;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      status: 'success',
      data: tour,
    });
  }),
  deleteTour: catchAsync(async (req, res) => {
    const { id } = req.params;
    await Tour.findByIdAndDelete(id);
    res.status(204).json();
  }),
};
