import { ERROR } from 'src/data/errors';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: ERROR.emailisrequired,
    })
    .trim()
    .email(ERROR.emailisinvalid),
  password: z
    .string({
      required_error: ERROR.passwordisrequired,
    })
    .trim()
    .min(1, ERROR.passwordisrequired),

  remember: z.boolean().optional(),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
