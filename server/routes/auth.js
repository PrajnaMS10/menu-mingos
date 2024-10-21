const express = require('express'); 
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, usn, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
        username,
        usn,
        email,
        password: hashedPassword,
    });

    await user.save();

    res.json({ message: 'User created successfully' });
});

// Login Route
router.post('/login', async (req, res) => {
    const { usn, password } = req.body; // Change to usn

    const user = await User.findOne({ usn }); // Search for user by USN
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
    }

    // Successful login without a token
    console.log('Login successful for user:', user);
    res.json({ message: 'Login successful' });
});

module.exports = router;
