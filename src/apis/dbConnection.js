
const mongoose = require('mongoose')

const connection = {}

export const dbConnection = async () => {
    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        handleError(error);
    }
}