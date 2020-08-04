/**
 * JSONSchema definitions used for generating fake data. One schema to define
 * each type of object required for the project.
 *
 * Schema names should specify the context in which it will be used,as well as the resource
 * it is being used to generate.
 *
 */
export const usersSchema = {
  definitions: {
    email: { type: 'string', pattern: '^[^s@]+@[^s@]+.[^s@]+$' },
  },
  type: 'array',
  items: {
    type: 'object',
    required: [
      '_id',
      'username',
      'password',
      'activated',
      'invited_by',
      'created_at',
      'last_login',
      'suspended',
      'kits_modified',
      'kits_added',
      'email',
      'roles',
    ],
    properties: {
      _id: { type: 'string' },
      kits_added: { type: 'number', minimum: 0 },
      kits_modified: { type: 'number', minimum: 0 },
      password: { type: 'string' },
      username: { type: 'string' },
      activated: { type: 'boolean' },

      created_at: { type: 'string', format: 'date-time' },
      last_login: { type: 'string', format: 'date-time' },
      suspended: { type: 'boolean' },
      email: { $ref: '#/definitions/email' },
      invited_by: {
        type: 'object',
        required: ['email', 'username', '_id'],
        properties: {
          _id: { type: 'string' },
          username: { type: 'string' },
          email: { $ref: '#/definitions/email' },
        },
      },
      roles: {
        type: 'array',
        items: { type: 'string', pattern: 'MANAGE_USERS | VERIFY_KITS | MANAGE_KITS', minItems: 1, maxItems: 3 },
      },
    },
  },
};

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
