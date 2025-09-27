import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';

import productRoutes from "./routes/product.route.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json()); // allow us to accept JSON data in the body

app.use('/api/products', productRoutes);

app.listen(4000, () =>{
    connectDB();
    console.log("Server is started at http://localhost:" + PORT);
});

