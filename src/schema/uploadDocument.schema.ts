import { z } from 'zod';

export const UploadDocument = z.object({
  entity: z.string(),
  chartOfAccounts: z.string(),
});

export type UploadDocument = z.infer<typeof UploadDocument>;
