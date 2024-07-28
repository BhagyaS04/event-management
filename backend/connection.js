const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('DB is connected');
}).catch((err) => {
    console.error('DB connection error:', err);
});
