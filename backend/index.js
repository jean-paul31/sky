const express = require("express");
const connectDb = require("./src/config/db")
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cors());

connectDb();



app.listen(3000, ()=> {
    console.log('🚀 Serveur démarré sur le port 3000');
});
