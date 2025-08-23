require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for admin creation');

    const email = process.env.DEFAULT_ADMIN_EMAIL;
    const password = process.env.DEFAULT_ADMIN_PASSWORD;

    let user = await User.findOne({ email });

    if (user) {
      console.log('Admin user already exists.');
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        email,
        password: hashedPassword,
        role: 'admin'
      });

      await user.save();
      console.log('Admin user created successfully.');
    }
  } catch (err) {
    console.error('Error creating admin user:', err.message);
  } finally {
    mongoose.disconnect();
  }
};

createAdminUser();