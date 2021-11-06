const db = require("../db.json");
const globalID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(db);
  },
  deleteHouse: (req, res) => {
    const houseID = req.params.id;
    const index = db.findIndex((house) => house.id === houseID);
    db.splice(index, 1);
    res.status(200).send(db);
  },
  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    const newHouse = {
      id: globalID,
      address,
      price,
      imageURL,
    };
    db.push(newHouse);
    globalID++;
    res.status(200).send(db);
  },

  updateHouse: (req, res) => {
    const houseID = +req.params.id;
    const i = db.findIndex((house) => house.id === houseID);
    let houseCost = db[i].price;

    for (let i = 0; i < db.length; i++)
      if (db[i].id === houseID) {
        if (type === "plus") {
          return (db[i].price += 10000);
        } else {
          if (type === "minus") {
            return (db[i].price -= 10000);
          }
        }
      }

    res.status(200).send(db);
  },
};
