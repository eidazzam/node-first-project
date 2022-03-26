const express = require('express');
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  findTourById,
} = require('../../controllers/tours');

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.use('/:id', findTourById);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
