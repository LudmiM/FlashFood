<<<<<<< HEAD
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
=======
/* eslint-disable no-undef */
import "dotenv/config";
import app from './app.js'
import { sequelize } from './database/index.js';

app.listen(process.env.PORT || 3000, async function () {
  try {
    // await sequelize.sync({ force: false })
    await sequelize.sync({ force: true })
  console.log(`server running on http://localhost:${this.address().port}`)
  } catch (error) {
    console.log(error);
  }
});
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
