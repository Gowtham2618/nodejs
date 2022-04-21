const mongoose = require('mongoose');

function dbconnection() {
    mongoose.connect(process.env.DB,()=>{
        console.log('mongoose connected successfully******');
    });
}

module.exports = {dbconnection}