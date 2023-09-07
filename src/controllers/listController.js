const { default: mongoose } = require("mongoose");
const List = require("../models/listSchema");

const saveList = async (req, res) => {
  try {
    const { listName } = req.body;
    const names = await List({ listName }).save();
    res.status(201).send(names);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { listName } = req.body;
    const updatedList = await List.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { listName } }
    );
    res.status(201).send("OK");
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
const getList = async (req, res) => {
  try {
    const getList = await List.find();
    await res.send(getList);
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id,'delete')

    const deleteOne = await List.deleteOne( { _id: new mongoose.Types.ObjectId(id) });
    await res.send(deleteOne);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { saveList, getList, updateList,deleteList };
 