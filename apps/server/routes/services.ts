import {
  ServiceBookingCreateSchema,
  ServiceProviderCreateSchema,
} from '@farmate/zod';
import { Router } from 'express';
import { z } from 'zod';

const services = Router();

services.post('/provider/create', (req, res) => {
  try {
    const validatedData = ServiceProviderCreateSchema.parse(req.body);

    // TODO: Create service provider in database
    res.status(201).json({
      success: true,
      message: 'Service provider created successfully',
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

services.post('/booking/create', (req, res) => {
  try {
    const validatedData = ServiceBookingCreateSchema.parse(req.body);

    // TODO: Create service booking in database
    res.status(201).json({
      success: true,
      message: 'Service booking created successfully',
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

export default services;
