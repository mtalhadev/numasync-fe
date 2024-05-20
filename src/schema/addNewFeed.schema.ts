import { z } from 'zod';

export const AddNewFeed = z.object({
  feedType: z.string(),
  accountCode: z.string(),
  accountName: z.string(),
});

export type AddNewFeed = z.infer<typeof AddNewFeed>;
