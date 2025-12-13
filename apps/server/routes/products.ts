import { ProductCreateSchema } from '@farmate/zod';
import { Router } from 'express';
import { z } from 'zod';

const products = Router();

products.post('/create', (req, res) => {
  try {
    const validatedData = ProductCreateSchema.parse(req.body);

    // TODO: Create product in database
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: validatedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default products;
