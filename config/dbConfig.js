const mongoose = require('mongoose');
const { connect } = require('../routes/ContactRoutes');

const connectDb = async () => {
    try { 
        const connect = await mongoose.connect(process.env.CONNECTION_STRING) 
        console.log("connection successful : ", connect.connection.host, connect.connection.name);
        
    } catch (error) {
        console.log(err);
        process.exit(1)//exits the connection process
        
    }
}

module.exports = connectDb