const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const authRoute = require('./routes/auth');
const cropRoute = require('./routes/crops');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/crops', cropRoute);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("DB Connected");

        // Seed default admin account
        const adminEmail = "admin@agrotech.com";
        const adminExists = await User.findOne({ email: adminEmail });
        if (!adminExists) {
            const hashedPassword = await bcrypt.hash("password123", 10);
            const admin = new User({
                name: "Agrotech Admin",
                email: adminEmail,
                password: hashedPassword,
                isAdmin: true
            });
            await admin.save();
            console.log("Default Admin: admin@agrotech.com / password123");
        }
    })
    .catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
