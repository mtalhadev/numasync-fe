import { z } from 'zod';

export const filterSchema = z.object({
  filterByOwner: z.string().optional(),
  min: z.string().optional(),
  max: z.string().optional(),
});

export type filterSchema = z.infer<typeof filterSchema>;
