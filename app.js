const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const trainingCenterRoutes = require('./routes/trainingCenterRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', trainingCenterRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Unable to connect to the database:', err));
