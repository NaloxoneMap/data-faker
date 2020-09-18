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
    email: { type: 'string', format: 'email' },
  },
  type: 'array',
  items: {
    type: 'object',
    required: [
      '_id',
      'username',
      'password',
      'activated',
      'invitedBy',
      'invitedOn',
      'lastLogin',
      'suspended',
      'kitsModified',
      'kitsAdded',
      'kitsVerified',
      'kitsDeleted',
      'email',
      'roles',
    ],
    properties: {
      _id: { type: 'string' },
      kitsAdded: { type: 'number', minimum: 0 },
      kitsModified: { type: 'number', minimum: 0 },
      kitsVerified: { type: 'number', minimum: 0},
      password: { type: 'string' },
      username: { type: 'string' },
      activated: { type: 'boolean' },
      invitedOn: { type: 'string', format: 'date-time' },
      lastLogin: { type: 'string', format: 'date-time' },
      suspended: { type: 'boolean' },
      email: { $ref: '#/definitions/email' },
      invitedBy: {
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

export const kitSchema = {
  definitions: {
    user: {
      type: 'object',
      required: ['username', '_id', 'email'],
      properties: {
        username: { type: 'string' },
        email: { type: 'string', format: 'email' },
        _id: { type: 'string' },
      },
    },
  },
  type: 'array',
  items: {
    type: 'object',
    required: [
      '_id',
      'location',
      'lastVerifiedOn',
      'openingHours',
      'expires',
      'organizationName',
      'notes',
      'createdBy',
      'createdOn',
      'lastVerifiedBy',
      'lastEditedOn',
      'lastEditedBy',
      'contacts',
    ],
    properties: {
      _id: { type: 'string' },
      createdBy: { $ref: '#/definitions/user' },
      createdOn: { type: 'string', format: 'date-time' },
      lastVerifiedBy: { $ref: '#/definitions/user' },
      lastEditedOn: { type: 'string', format: 'date-time' },
      lastEditedBy: { $ref: '#/definitions/user' },
      contacts: {
        type: 'array',
        items: {
          type: 'object',
          required: ['info', 'name', 'public', 'primary'],
          properties: {
            info: { type: 'string' },
            name: { type: 'string' },
            public: { type: 'boolean' },
            primary: { type: 'boolean' },
          },
        },
      },
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
      lastVerifiedOn: { type: 'string', format: 'date-time' },
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
      expires: { type: 'string' },
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
