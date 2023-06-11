// require("dotenv").config();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB connection SUCCESS");
//   } catch (error) {
//     console.error("MongoDB connection FAIL");
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');

const mongoDbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Database connection successful');
      } catch (err) {
        console.log(err);
        process.exit(1);
      }
};

module.exports = {
    mongoDbConnect,
};