const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainingCenter = sequelize.define('TrainingCenter', {
  CenterName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 40]
    }
  },
  CenterCode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [12, 12],
      isAlphanumeric: true
    }
  },
  Address: {
    type: DataTypes.JSON,
    allowNull: false
  },
  StudentCapacity: {
    type: DataTypes.INTEGER,
  },
  CoursesOffered: {
    type: DataTypes.JSON,  // Change here
    allowNull: false
  },
  CreatedOn: {
    type: DataTypes.BIGINT,
    defaultValue: () => Math.floor(Date.now() / 1000)
  },
  ContactEmail: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  ContactPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [10, 15]
    }
  }
});

module.exports = TrainingCenter;
