import { getSlug } from '@/functions/get-slug'
import type { CollectionConfig } from 'payload'

export const Templates: CollectionConfig = {
  slug: 'templates',
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
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'originalPrice',
      type: 'number',
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'points',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'point',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'new',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      label: 'categories',
      type: 'collapsible',
      admin: {
        initCollapsed: false,
        position: 'sidebar',
      },
      fields: [
        {
          name: 'ratios',
          type: 'relationship',
          relationTo: 'ratios',
          hasMany: true,
        },
        {
          name: 'themes',
          type: 'relationship',
          relationTo: 'themes',
          hasMany: true,
        },
        {
          name: 'colors',
          type: 'relationship',
          relationTo: 'colors',
          hasMany: true,
        },
        {
          name: 'socials',
          type: 'relationship',
          relationTo: 'socials',
          hasMany: true,
        },
      ],
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
