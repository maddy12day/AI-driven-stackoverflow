import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//login controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const authentication = await bcrypt.compareSync(password, user.password);
        if (authentication) {
            const { username, firstName, lastName, id: _id } = user;
            // Optionally generate JWT token here if needed

            return res.status(200).json({ username, status: true });
        } else {
            return res.status(401).json({ message: "Authentication failed" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Authentication failed due to an internal error", status: false });
    }
};


//register new user

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;

        // Check if the email or username already exists
        const uniqueEmail = await User.findOne({ email: email });
        const uniqueUsername = await User.findOne({ username: username });

        if (uniqueEmail) {
            return res.status(401).json({ message: "Email already exists" });
        }

        if (uniqueUsername) {
            return res.status(401).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashpwd = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: hashpwd
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Send response
        res.status(200).json({ username: savedUser.username, status: true });
    } catch (error) {
        res.status(500).json({ message: `Error occurred: ${error}`, status: false });
    }
};