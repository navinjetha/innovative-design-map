const Classification = require("../models/Classification");

const getClassifications = async (req, res) => {
  try {
    const classifications = await Classification.find({});
    res.json(classifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const newClassifications = async (req, res) => {
  let newClassification = req.body;
  try {
    const classifications = new Classification(newClassification);
    await classifications.save();
    console.log("Created Classifications", classifications);
    res.send(classifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// const getClassificationById = async (req, res) => {
//   try {
//     const classification = await Classification.findById(req.params.id);

//     res.json(classification);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

module.exports = {
  getClassifications,
  newClassifications,
};
