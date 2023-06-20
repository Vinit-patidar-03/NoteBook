//Connecting MongoDB with Express Server using mongoose
const mongoose= require('mongoose');
const mongoURI="mongodb://0.0.0.0:27017/Notbook?directConnection=true";

const connectToMongo= async ()=>
{
    await mongoose.connect(mongoURI)
    console.log('connected to mongoose successfully')
}

module.exports= connectToMongo;