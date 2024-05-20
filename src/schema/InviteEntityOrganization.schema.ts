import { ERROR } from 'src/data/errors';
import { z } from 'zod';

export const InviteEntityOrganizationSchema = z.object({
  organizationEmail: z
    .string({
      required_error: ERROR.organizationEmailRequired,
    })
    .trim()
    .email(ERROR.organizationEmailRequired),

  messageToOrganization: z
    .string({
      required_error: ERROR.messageToOrganizationRequired,
    })
    .trim()
    .min(1, ERROR.messageToOrganizationRequired),
});

export type InviteEntityOrganizationSchemaType = z.infer<
  typeof InviteEntityOrganizationSchema
>;
