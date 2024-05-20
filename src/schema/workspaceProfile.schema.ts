import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const WorkspaceProfile = z.object({
  organizationName: z.string(),
  workspaceLogo: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.',
    ),
  publicPhoneNumber: z.number(),
  publicEmail: z.string().email().optional(),
  description: z.string().optional(),
});

export type WorkspaceProfile = z.infer<typeof WorkspaceProfile>;
