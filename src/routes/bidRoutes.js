const express = require('express');
const router = express.Router();

const bidController = require('../controllers/bidController');

router.post('/create', bidController.createBid);
router.get('/bids/:id', bidController.getBidsForListing);
router.put('/bid/:id', bidController.updateBid);

module.exports = router;
