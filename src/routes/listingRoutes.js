const express = require('express');
const router = express.Router();
const axios = require('axios');

// Define routes
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.noroff.dev/api/v1/auction/listings'
    );
    const listings = response.data;
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting listings' });
  }
});

router.post('/', async (req, res) => {
  const { title, description, tags, media, endsAt } = req.body;

  try {
    const response = await axios.post(
      'https://api.noroff.dev/api/v1/auction/listings',
      {
        title,
        description,
        tags,
        media,
        endsAt,
      }
    );
    const listing = response.data;
    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating listing' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.noroff.dev/api/v1/auction/listings/${id}`
    );
    const listing = response.data;
    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting listing' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, media } = req.body;

  try {
    const response = await axios.put(
      `https://api.noroff.dev/api/v1/auction/listings/${id}`,
      {
        title,
        description,
        tags,
        media,
      }
    );
    const listing = response.data;
    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating listing' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await axios.delete(`https://api.noroff.dev/api/v1/auction/listings/${id}`);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting listing' });
  }
});

module.exports = router;
