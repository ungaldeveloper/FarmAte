import { UserCreateSchema } from '@farmate/zod';
import type { UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { z } from 'zod';
import prisma from '../helpers/db.js';

const users = Router();

users.post('/create', async (req, res) => {
  try {
    const validatedData = UserCreateSchema.parse(req.body);
    validatedData.password = await bcrypt.hash(validatedData.password, 10);
    const resuser = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        password: validatedData.password,
        role: validatedData.role as UserRole,
        pin: validatedData.pin ?? 0o0,
      },
    });

    // TODO: Create user in database
    if (resuser.id) {
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: validatedData,
      });
    }
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

export default users;
