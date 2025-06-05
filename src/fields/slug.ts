import type { Field } from 'payload'

export const slugField = (): Field[] => [
  {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    required: true,
    localized: false,
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        ({ value, data }) => {
          if (typeof value === 'string' && value.trim().length > 0) return value

          if (typeof data?.name === 'string') {
            return data.name
              .toLowerCase()
              .replace(/[^a-zA-Z0-9 ]/g, '')
              .replace(/\s+/g, '-')
          }

          return value
        },
      ],
    },
  },
]
