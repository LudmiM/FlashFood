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
