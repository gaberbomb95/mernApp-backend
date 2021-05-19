const router = require("express").Router();
const { Router } = require("express");
const Gun = require("../models/Gun");

const gunSeed = [
  {
    brand: "Shadow Systems",
    model: "mr920 Elite",
    img: "https://shadowsystemscorp.com/wp-content/uploads/photo-mr920-elite1.jpg",
  },
  {
    brand: "Glock ",
    model: "43",
    img: "https://us.glock.com/-/media/Global/US/old/US-Products/G43_Gen3-107.ashx",
  },
  {
    brand: "Rossi",
    model: "rs22",
    img: "https://dukessportshop.com/wp-content/uploads/2020/12/52614_RossiRS2222lrRifleBlack-RS22L1811.jpg",
  },
  {
    brand: "FrankenBuild",
    model: "Custom",
    img: "https://fflone.com/app/uploads/sites/4/2020/01/BAD-300-PIBK_1.jpg",
  },
  {
    brand: "Q",
    model: "Honey Badger",
    img: "https://www.riflegear.com/images/product/large/9840.jpg",
  },
];

router.get("/", async (req, res) => {
  try {
    const guns = await Gun.find({});
    res.json(guns);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGun = await Gun.create(req.body);
    res.json(newGun);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/seed", async (req, res) => {
  console.log("seed route hit")
    await Gun.remove({});
    console.log("gun seed: ", gunSeed);
    await Gun.create(gunSeed);
    const guns = await Gun.find({});
    console.log("guns: ", guns);
    res.json(guns);
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGun = await Gun.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedGun);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGun = await Place.findByIdAndRemove(req.params.id);
    res.json(deletedGun);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
