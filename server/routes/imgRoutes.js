const express = require('express');
const Image = require('../models/Image');
const app = express();

app.get(
  '/images',
  // Get all images
  async (req, res) => {
    try {
      const images = await Image.find({});
      res.set('Content-Type', 'application/json').status(200).send(images);
    } catch {
      (err) => {
        res
          .set('Content-Type', 'text/plain')
          .status(400)
          .send(`Error in routes/imgRoutes: get all error: ${err}`);
      };
    }
  }
);

//Post image
app.post("/images", async (req, res) => {
  
    const image = new Image(req.body);
    try {
        const newImage = await image.save();
        res.set('Content-Type', 'application/json').status(201).send(newImage);
        
    } catch (err) {
    res.status(500).send(`Error in routes/imgRoutes: post Image error: ${err}`);
  }
});

app.delete("/images/:id", async (request, response) => {
    try {
      const image = await ImageModel.findByIdAndDelete(request.params.id);
  
      if (!image) 
        response.status(404).send("Unable to locate image");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(`Error in routes/imgRoutes: delete Image error: ${err}`);
    }
  });

  //get image by location
  app.get("/images/:location", async (request, response) => {
    try {
    const locationInput = req.params.location;
    
    const state = { state: locationInput };
    const image = await ImageModel.find({ location: state });

    if (!image)
        response.status(404).send("Unable to fiznd images in that state");
    
    res.set('Content-Type', 'application/json').status(200).send(image);
 
    } catch (error) {
      response.status(500).send(`Error in routes/imgRoutes: search by location id error: ${err}`);
    }
  });