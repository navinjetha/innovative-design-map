const Glossary = require("../models/Glossary");

const getGlossary = async (req, res) => {
  try {
    const glossary = await Glossary.find({});
    res.json(glossary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const newGlossary = async (req, res) => {
  let newGlossary = req.body;
  try {
    const glossary = new Glossary(newGlossary);
    await glossary.save();
    res.send(glossary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getGlossary,
  newGlossary,
};
