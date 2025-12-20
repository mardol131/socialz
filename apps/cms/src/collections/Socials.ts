import { getSlug } from '@/functions/get-slug'
import type { CollectionConfig } from 'payload'

export const Socials: CollectionConfig = {
  slug: 'socials',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        if (data.label) {
          data.slug = getSlug(data.label)
        }
      },
    ],
  },
}
