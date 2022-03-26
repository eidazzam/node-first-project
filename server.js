const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');

const { PORT, HOST, DB_URL } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('connection failed =>', err);
  });

app.listen(PORT, HOST, () => {
  console.log('server is running');
});
