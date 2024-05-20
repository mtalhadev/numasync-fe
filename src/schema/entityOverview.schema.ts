import { ERROR } from 'src/data/errors';
import { z } from 'zod';

export const entityOverviewSchema = z.object({
  entityName: z
    .string({
      required_error: ERROR.entityNameIsRequired,
    })
    .trim()
    .min(1, ERROR.entityNameIsRequired),
  entityEmail: z
    .string({
      required_error: ERROR.entityEmailIsRequired,
    })
    .trim()
    .email(ERROR.entityEmailIsInvalid),
  entityAddress: z
    .string({
      required_error: ERROR.entityAddressIsRequired,
    })
    .trim()
    .min(1, ERROR.entityAddressIsRequired),
  entityPhoneNumber: z
    .string({
      required_error: ERROR.entityPhoneNumberIsRequired,
    })
    .trim()
    .min(1, ERROR.entityPhoneNumberIsRequired),
  tags: z.string().optional(),
  groups: z.string().optional(),
});

export type entityOverviewType = z.infer<typeof entityOverviewSchema>;
