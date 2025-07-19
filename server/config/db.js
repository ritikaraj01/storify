import mongoose from "mongoose";

const connectToMongo = async () => {
    const res = await mongoose.connect(
        'mongodb://127.0.0.1:27017/mern-gallery-app'
    );
    if(res)
    {
        console.log("connected succesfully");
    }
};

export default connectToMongo