import { ERROR } from 'src/data/errors';

// Regex
import { cardNumberRegex, expirationDateRegex, zipCodeRegex } from 'src/utils/regex';

// Zod
import { z } from 'zod';

export const BillingDetailsSchema = z.object({
  cardName: z.string({ required_error: ERROR.cardNameisrequired }).trim().min(1, ERROR.cardNameisrequired),

  cardNumber: z
    .string({ required_error: ERROR.cardNumberisrequired })
    .trim()
    .regex(cardNumberRegex, ERROR.cardNumberInvalid),

  expirationDate: z
    .string({ required_error: ERROR.expirationDateisrequired })
    .trim()
    .regex(expirationDateRegex, ERROR.expirationDateInvalid),

  cvv: z
    .string({ required_error: ERROR.cvvisrequired })
    .trim()
    .length(3, ERROR.cvvInvalid)
    .or(z.string().length(4, ERROR.cvvInvalid)),

  streetAddress: z
    .string({ required_error: ERROR.stressAddressisrequired })
    .trim()
    .min(1, ERROR.stressAddressisrequired),

  state: z.string({ required_error: ERROR.stateisrequired }).trim().min(1, ERROR.stateInvalid),

  zipCode: z.string({ required_error: ERROR.zipCodeisrequired }).trim().regex(zipCodeRegex, ERROR.zipCodeInvalid),
});

export type BillingDetailsSchemaType = z.infer<typeof BillingDetailsSchema>;
