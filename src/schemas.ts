/**
 * JSONSchema definitions used for generating fake data. One schema to define
 * each type of object required for the project.
 *
 * Schema names should specify the context in which it will be used,as well as the resource
 * it is being used to generate.
 *
 */

export const publicApiKitSchema = {
  type: 'array',
  items: {
    type: 'object',
    required: ['_id', 'location', 'lastVerified', 'openingHours', 'expires', 'organizationName', 'notes'],
    properties: {
      _id: { type: 'string' },
      location: {
        type: 'object',
        required: ['address', 'postalZip', 'country', 'provinceState', 'point', 'city'],
        properties: {
          city: { type: 'string' },
          point: {
            type: 'object',
            required: ['type', 'coordinates'],
            properties: {
              type: { type: 'string' },
              coordinates: {
                type: 'object',
                required: ['lon', 'lat'],
                properties: {
                  lon: { type: 'number', minimum: -90, maximum: 90 },
                  lat: { type: 'number', minimum: -180, maximum: 180 },
                },
              },
            },
          },
          address: { type: 'string' },
          postalZip: { type: 'string' },
          country: { type: 'string' },
          provinceState: { type: 'string' },
        },
      },
      lastVerified: { type: 'string', format: 'date-time' },
      openingHours: {
        type: 'array',
        items: {
          type: 'object',
          required: ['weekday', 'opensAt', 'closesAt'],
          properties: {
            weekday: { type: 'integer', maximum: 6, minimum: 0 },
            opensAt: { type: 'string', pattern: '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$|closed' },
            closesAt: { type: 'string', pattern: '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$|closed' },
          },
        },
        minItems: 7,
        maxItems: 7,
      },
      expires: { type: 'string', format: 'date-time' },
      organizationName: { type: 'string' },
      notes: {
        type: 'array',
        items: {
          type: 'object',
          required: ['locale', 'content'],
          properties: {
            locale: { type: 'string', pattern: '(en|fr)' },
            content: { type: 'string' },
          },
        },
      },
    },
  },
};
