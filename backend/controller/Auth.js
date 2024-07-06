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
