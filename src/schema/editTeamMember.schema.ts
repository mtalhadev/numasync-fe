import { z } from 'zod';

export const EditTeamMember = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.number(),
  email: z.string().email(),
  role: z.string(),
  newEntity: z.string(),
});

export type EditTeamMember = z.infer<typeof EditTeamMember>;
