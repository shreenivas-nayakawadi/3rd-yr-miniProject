import bcrypt from 'bcrypt';
import prisma from '../models/prisma.js';  
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';  

const authController = {
      signup: async (req, res) => {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                  return res
                        .status(400)
                        .json({ error: "Please provide all fields" });
            }
            try {
                  const existinguser = await prisma.user.findUnique({
                        where: { email },
                  });
                  if (existinguser) {
                        return res
                              .status(400)
                              .json({ error: "User already exists" });
                  }
                  const hashedPassword = await bcrypt.hash(password, 10);
                  const newUser = await prisma.user.create({
                        data: {
                              username,
                              email,
                              password: hashedPassword,
                        },
                  });

                  generateTokenAndSetCookie(res, newUser.user_id);

                  res.status(201).json(newUser);
            } catch (error) {
                  console.log("Error in signup", error.message);
                  res.status(400).json({
                        message: "error in signup",
                        error: error.message,
                  });
            }
      },

      login : async (req, res) => {
            try {
              const { email, password } = req.body;
          
              // Find user by email
              const user = await prisma.user.findUnique({
                where: { email },
              });
          
              // Check if user exists and if the password is correct
              if (user && (await bcrypt.compare(password, user.password))) {
                // Generate token and set in cookie
                generateTokenAndSetCookie(res, user.user_id);
          
                // Return user data, excluding the password
                res.json({
                  message: "Logged in successfully",
                  data: { ...user, password: undefined },
                });
              } else {
                res.status(400).json({ error: "Invalid credentials" });
              }
            } catch (error) {
              console.error('Login error:', error);
              res.status(500).json({ error: 'Internal server error' });
            }
          },

      logout: async (req, res) => {
            res.clearCookie("token");
            res.status(200).json({ success: true, message: "Logged out" });
      },
};

export default authController;