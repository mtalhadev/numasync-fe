import { ERROR } from 'src/data/errors';
// Zod
import { z } from 'zod';

export const workspaceCreateSchema = z.object({
  companyName: z
    .string({
      required_error: ERROR.companyNameisrequired,
    })
    .trim()
    .min(1),

  companyPhoneNumber: z
    .string({
      required_error: ERROR.companyPhoneNumberisrequired,
    })
    .trim()
    .min(10, ERROR.phoneNumberMustBeAtMost10Characters)
    .max(11, ERROR.phoneNumberMustBeAtLeast11Characters),

  companyEmail: z
    .string({
      required_error: ERROR.companyEmailisrequired,
    })
    .trim()
    .email(ERROR.emailisinvalid),

  companyWebsite: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value) {
          return value.includes('http://') || value.includes('https://') || value.includes('www.');
        }
        return true;
      },
      {
        message: ERROR.pleaseEnterAValidURL,
      },
    ),
});

export type workspaceCreateSchemaType = z.infer<typeof workspaceCreateSchema>;
