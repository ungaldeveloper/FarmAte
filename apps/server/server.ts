import express from 'express';
import { orders, products, services, users } from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/users', users);
app.use('/services', services);
app.use('/products', products);
app.use('/orders', orders);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
