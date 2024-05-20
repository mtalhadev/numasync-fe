import { ERROR } from 'src/data/errors';

// Zod
import { z } from 'zod';

export const passwordSchema = z
  .object({
    password: z
      .string({
        required_error: ERROR.passwordisrequired,
      })
      .trim()
      .min(6, ERROR.passwordMustContainAtLeast6Characters)
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1SpecialCharacter,
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1CapitalLetter,
      })
      .refine((value) => /[0-9]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1NumericValue,
      }),
    confirmPassword: z
      .string({
        required_error: ERROR.confirmpasswordisrequired,
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR.passwordDontMatch,
    path: ['confirmPassword'],
  });

export type PasswordSchemaType = z.infer<typeof passwordSchema>;
