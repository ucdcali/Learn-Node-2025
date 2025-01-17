import Example from '../models/Example.js';

export const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.render('index', { examples });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const createExample = async (req, res) => {
  try {
    const name  = req.body.name;
    const descriptor   = req.body.descriptor || 'boring';
    const newExample = new Example({ name, descriptor });
    await newExample.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const loadAbout = async (req, res) => {
  try {
    //const examples = await Example.find();
    res.render('about');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};