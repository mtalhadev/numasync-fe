import { ERROR } from 'src/data/errors';
import { z } from 'zod';

export const forgetPasswordSchema = z.object({
  email: z
    .string({
      required_error: ERROR.emailisrequired,
    })
    .trim()
    .email(ERROR.emailisinvalid),
});

export type ForgetPasswordSchemaType = z.infer<typeof forgetPasswordSchema>;
