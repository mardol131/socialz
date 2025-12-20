import { getSlug } from '@/functions/get-slug'
import type { CollectionConfig } from 'payload'

export const Colors: CollectionConfig = {
  slug: 'colors',
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
    {
      name: 'hex',
      type: 'text',
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
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
