// import dotenv and config

import dotenv from "dotenv";

dotenv.config();

// Connect to the database
import connectDB from "./db/index.js";

connectDB();

// Import required modules
import express from "express";
