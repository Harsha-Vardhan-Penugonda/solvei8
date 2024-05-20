const TrainingCenter = require('../models/trainingCenter');

exports.createTrainingCenter = async (req, res) => {
  try {
    const newCenter = await TrainingCenter.create(req.body);
    res.status(201).json(newCenter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTrainingCenters = async (req, res) => {
  try {
    const centers = await TrainingCenter.findAll();
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
