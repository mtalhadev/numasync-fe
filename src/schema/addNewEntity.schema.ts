import { z } from 'zod';

export const AddNewEntity = z.object({
  entityName: z.string(),
  phoneNumber: z.number().optional(),
  businessEmail: z.string().email().optional(),
  address: z.string().optional(),
  website: z.string().url().optional(),
  client: z.string().optional(),
});

export type AddNewEntity = z.infer<typeof AddNewEntity>;
