import { z } from 'zod';

export const InviteFirm = z.object({
  email: z.string().email(),
});

export type InviteFirm = z.infer<typeof InviteFirm>;
