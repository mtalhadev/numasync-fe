import { z } from 'zod';
import { ERROR } from 'src/data/errors';

export const accountDetailSchema = z
  .object({
    firstName: z
      .string({
        required_error: ERROR.firstNameisrequired,
      })
      .trim()
      .min(1, ERROR.firstNameisrequired),
    lastName: z
      .string({
        required_error: ERROR.lastNameisrequired,
      })
      .trim()
      .min(1, ERROR.lastNameisrequired),
    email: z
      .string({
        required_error: ERROR.emailisrequired,
      })
      .trim()
      .email(ERROR.emailisinvalid),
    phoneNumber: z
      .string({
        required_error: ERROR.phoneNumberisrequired,
      })
      .trim()
      .min(10, ERROR.phoneNumberMustBeAtMost10Characters)
      .max(11, ERROR.phoneNumberMustBeAtLeast11Characters),
    password: z
      .string({
        required_error: ERROR.passwordisrequired,
      })
      .trim()
      .min(6, ERROR.passwordMustContainAtLeast6Characters),
    confirmPassword: z
      .string({
        required_error: ERROR.confirmpasswordisrequired,
      })
      .trim()
      .min(1, ERROR.confirmpasswordisrequired),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: ERROR.passwordDontMatch,
    path: ['confirmPassword'],
  });

export type AccountDetailSchemaType = z.infer<typeof accountDetailSchema>;
