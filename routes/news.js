const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const News = require('../models/News');

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get news by ID
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create news
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ msg: 'Title and content are required' });
  }

  try {
    const news = new News({
      title,
      content
    });

    await news.save();

    res.status(201).json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update news
router.put('/:id', auth, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ msg: 'Title and content are required' });
  }

  try {
    let news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }

    news.title = title;
    news.content = content;

    await news.save();

    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete news
router.delete('/:id', auth, async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }
    res.json({ msg: 'News deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;