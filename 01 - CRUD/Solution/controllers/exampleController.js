import Example from '../models/Example.js';

// READ: Get all examples
export const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.render('index', { examples });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// CREATE: Add a new example
export const createExample = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newExample = new Example({ name, description });
    await newExample.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// UPDATE: Edit an example by ID
export const updateExample = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await Example.findByIdAndUpdate(id, { name, description }, { new: true });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// DELETE: Remove an example by ID
export const deleteExample = async (req, res) => {
  try {
    const { id } = req.params;
    await Example.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
