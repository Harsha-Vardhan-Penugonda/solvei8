const express = require('express');
const { createTrainingCenter, getAllTrainingCenters } = require('../controllers/trainingCenterController');

const router = express.Router();

router.post('/training-centers', createTrainingCenter);
router.get('/training-centers', getAllTrainingCenters);

module.exports = router;
