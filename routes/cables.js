const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cable = require('../models/Cable');

// Get all cables
router.get('/', async (req, res) => {
  try {
    const cables = await Cable.find();
    res.json(cables);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get cable by ID
router.get('/:id', async (req, res) => {
  try {
    const cable = await Cable.findById(req.params.id);
    if (!cable) {
      return res.status(404).json({ msg: 'Cable not found' });
    }
    res.json(cable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create cable
router.post('/', auth, async (req, res) => {
  const { reference, section, nbrconductor, diameter, weight, type, insulation, conductor, voltage, applications, temperature_max, oilResistant, pricePerMeter } = req.body;

  // Validation des champs requis
  if (!reference || !section || !conductor) { // Adjusted based on new schema requirements
    return res.status(400).json({ msg: 'Reference, section, and conductor are required' });
  }

  try {
    const cable = new Cable({
      reference,
      section,
      nbrconductor,
      diameter,
      weight,
      type,
      insulation,
      conductor,
      voltage,
      applications,
      temperature_max,
      oilResistant,
      pricePerMeter
    });

    await cable.save();

    res.status(201).json(cable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update cable
router.put('/:id', auth, async (req, res) => {
  const { reference, section, nbrconductor, diameter, weight, type, insulation, conductor, voltage, applications, temperature_max, oilResistant, pricePerMeter } = req.body;

  // Validation des champs requis
  if (!reference || !section || !conductor) { // Adjusted based on new schema requirements
    return res.status(400).json({ msg: 'Reference, section, and conductor are required' });
  }

  try {
    let cable = await Cable.findById(req.params.id);
    if (!cable) {
      return res.status(404).json({ msg: 'Cable not found' });
    }

    cable.reference = reference;
    cable.section = section;
    cable.nbrconductor = nbrconductor;
    cable.diameter = diameter;
    cable.weight = weight;
    cable.type = type;
    cable.insulation = insulation;
    cable.conductor = conductor;
    cable.voltage = voltage;
    cable.applications = applications;
    cable.temperature_max = temperature_max;
    cable.oilResistant = oilResistant;
    cable.pricePerMeter = pricePerMeter;

    await cable.save();

    res.json(cable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete cable
router.delete('/:id', auth, async (req, res) => {
  try {
    const cable = await Cable.findByIdAndDelete(req.params.id);
    if (!cable) {
      return res.status(404).json({ msg: 'Cable not found' });
    }
    res.json({ msg: 'Cable deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;