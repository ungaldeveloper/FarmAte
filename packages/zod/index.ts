import { z } from 'zod';

export const UserRoleSchema = z.enum([
  'FARMER',
  'CONSUMER',
  'SERVICE_PROVIDER',
  'SHOP_OWNER',
  'ADMIN',
]);

export const OrderStatusSchema = z.enum([
  'PENDING',
  'ACCEPTED',
  'IN_DELIVERY',
  'DELIVERED',
  'CANCELLED',
]);

export const ServiceStatusSchema = z.enum([
  'PENDING',
  'ACCEPTED',
  'COMPLETED',
  'CANCELLED',
]);

export const AdvisoryTypeSchema = z.enum([
  'WEATHER',
  'CROP',
  'PEST',
  'VALUE_ADDITION',
]);

export const UserCreateSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  pin: z.coerce.number().int().min(0).max(9999).optional(),
  role: UserRoleSchema.optional(),
});

export const FarmerProfileCreateSchema = z.object({
  userId: z.string().uuid(),
});

export const ConsumerProfileCreateSchema = z.object({
  userId: z.string().uuid(),
});

export const FarmCreateSchema = z.object({
  farmerId: z.string().uuid(),
  name: z.string().optional().nullable(),
  soilType: z.string().optional().nullable(),
  cropType: z.string().optional().nullable(),
  farmSize: z.coerce.number().optional().nullable(),
  latitude: z.coerce.number().optional().nullable(),
  longitude: z.coerce.number().optional().nullable(),
  irrigation: z.string().optional().nullable(),
});

export const CropCreateSchema = z.object({
  farmId: z.string().uuid(),
  type: z.string().min(1),
  stage: z.string().optional().nullable(),
  plantedAt: z.coerce.date().optional().nullable(),
});

export const ListingCreateSchema = z.object({
  farmerId: z.string().uuid(),
  crop: z.string().min(1),
  quantity: z.coerce.number().positive(),
  price: z.coerce.number().nonnegative(),
  grade: z.string().optional().nullable(),
  imageUrl: z.string().url().optional().nullable(),
  location: z.string().optional().nullable(),
});

export const OrderCreateSchema = z.object({
  listingId: z.string().uuid(),
  consumerId: z.string().uuid(),
  quantity: z.coerce.number().positive(),
  totalPrice: z.coerce.number().nonnegative(),
  status: OrderStatusSchema.optional(),
});

export const ServiceProviderCreateSchema = z.object({
  userId: z.string().uuid(),
  category: z.string().min(1),
  price: z.coerce.number().nonnegative().optional().nullable(),
  location: z.string().optional().nullable(),
});

export const ServiceBookingCreateSchema = z.object({
  serviceId: z.string().uuid(),
  farmerId: z.string().uuid(),
  date: z.coerce.date(),
  status: ServiceStatusSchema.optional(),
  notes: z.string().optional().nullable(),
});

export const ShopCreateSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(1),
  location: z.string().optional().nullable(),
});

export const ProductCreateSchema = z.object({
  shopId: z.string().uuid(),
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.coerce.number().nonnegative(),
  stock: z.coerce.number().int().min(0),
});

export const DeviceTokenCreateSchema = z.object({
  userId: z.string().uuid(),
  token: z.string().min(1),
  platform: z.string().optional().nullable(),
});

export type UserCreateInput = z.infer<typeof UserCreateSchema>;
export type FarmerProfileCreateInput = z.infer<
  typeof FarmerProfileCreateSchema
>;
export type ConsumerProfileCreateInput = z.infer<
  typeof ConsumerProfileCreateSchema
>;
export type FarmCreateInput = z.infer<typeof FarmCreateSchema>;
export type CropCreateInput = z.infer<typeof CropCreateSchema>;
export type ListingCreateInput = z.infer<typeof ListingCreateSchema>;
export type OrderCreateInput = z.infer<typeof OrderCreateSchema>;
export type ServiceProviderCreateInput = z.infer<
  typeof ServiceProviderCreateSchema
>;
export type ServiceBookingCreateInput = z.infer<
  typeof ServiceBookingCreateSchema
>;
export type ShopCreateInput = z.infer<typeof ShopCreateSchema>;
export type ProductCreateInput = z.infer<typeof ProductCreateSchema>;
export type DeviceTokenCreateInput = z.infer<typeof DeviceTokenCreateSchema>;
