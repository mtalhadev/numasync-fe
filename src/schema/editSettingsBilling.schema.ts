import { z } from 'zod';

export const EditSettingsBilling = z.object({
  plan: z.string(),
  addOn: z.string(),
  paymentMethod: z.string(),
});

export type EditSettingsBilling = z.infer<typeof EditSettingsBilling>;
