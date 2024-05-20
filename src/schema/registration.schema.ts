import { ERROR } from 'src/data/errors';

// Zod
import { z } from 'zod';

export const registrationSchema = z
  .object({
    firstName: z
      .string({
        required_error: ERROR.firstNameisrequired,
      })
      .trim()
      .min(3, ERROR.firstNameMustBeAtLeast3Characters),
    lastName: z
      .string({
        required_error: ERROR.lastNameisrequired,
      })
      .trim()
      .min(3, ERROR.lastNameMustBeAtLeast3Characters),
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
      .min(6, ERROR.passwordMustContainAtLeast6Characters)
      .refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1SpecialCharacter,
      })
      .refine(value => /[A-Z]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1CapitalLetter,
      })
      .refine(value => /[0-9]/.test(value), {
        message: ERROR.passwordMustContainAtLeast1NumericValue,
      }),
    confirmPassword: z
      .string({
        required_error: ERROR.confirmpasswordisrequired,
      })
      .trim()
      .min(1, ERROR.confirmpasswordisrequired),
    agree: z.boolean(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: ERROR.passwordDontMatch,
    path: ['confirmPassword'],
  });

export type registrationSchemaType = z.infer<typeof registrationSchema>;
