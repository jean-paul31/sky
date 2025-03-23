const mongoose = require('mongoose');

const connectDb = async () => {

    try {
        mongoose.connect('mongodb://localhost:27017/sky')
        console.log('✅ MongoDB connecté');
    } catch (error) {
        console.error('❌ Erreur de connexion à MongoDB :', error);
        process.exit(1);        
    }
}

module.exports = connectDb;