const mongoose = require('mongoose');
const toursData = require('./data/tours-simple.json');
const TourModel = require('../models/Tour');

const importData = async () => await TourModel.insertMany(toursData);

const deleteData = async () => await TourModel.deleteMany();

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB connected');
    if (process.argv[2] === '--import') {
      await importData();
      console.log('data imported');
    } else {
      await deleteData();
      console.log('data deleted');
    }
  } catch (error) {
    console.error(error);
  }
};

main();
