const express = require("express");
const cors = require("cors");
const houseCtrl = require("./controller");
const PORT = 4004;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/houses", houseCtrl.getHouses);
app.get("/api/houses", houseCtrl.deleteHouse);
app.get("/api/houses", houseCtrl.createHouse);
app.get("/api/houses", houseCtrl.updateHouse);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
