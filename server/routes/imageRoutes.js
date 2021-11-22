const express = require("express");
const imageModel = require("../models/Image");
const app = express();

// GET
app.get("/images", async (request, response) => {
  const images = await imageModel.find({});

  try {
    response.send(images);
  } catch (error) {
    response.status(500).send(error);
  }
});

// POST
app.post("/image", async (request, response) => {
  const image = new imageModel(request.body);

  try {
    await image.save();
    response.send(image);
  } catch (error) {
    response.status(500).send(error);
  }
});

// PATCH
app.patch("/image/:id", async (request, response) => {
  try {
    await imageModel.findByIdAndUpdate(request.params.id, request.body);
    await imageModel.save();
    response.send(image);
  } catch (error) {
    response.status(500).send(error);
  }
});

// DELETE
app.delete("/image/:id", async (request, response) => {
  try {
    const image = await imageModel.findByIdAndDelete(request.params.id);

    if (!image) response.status(404).send("No image found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
