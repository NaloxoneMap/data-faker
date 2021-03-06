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
    email: { type: 'string', format: 'email', faker: 'internet.email' },
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
      kitsVerified: { type: 'number', minimum: 0 },
      kitsDeleted: { type: 'number', minimum: 0 },
      password: { type: 'string' },
      username: { type: 'string', faker: 'internet.userName' },
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
          username: { type: 'string', faker: 'internet.userName' },
          email: { $ref: '#/definitions/email' },
        },
      },
      roles: {
        type: 'array',
        items: { type: 'string', pattern: 'MANAGE_USERS|DELETE_KITS|EDIT_KITS', minItems: 1, maxItems: 3 },
      },
    },
  },
};

const newDate = new Date();
newDate.setMonth(newDate.getMonth() + 1);

export const kitSchema = {
  definitions: {
    user: {
      type: 'object',
      required: ['username', '_id', 'email'],
      properties: {
        username: { type: 'string', faker: 'internet.userName' },
        email: { type: 'string', format: 'email', faker: 'internet.email' },
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
      'hidden',
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
      hidden: { type: 'boolean' },
      contacts: {
        type: 'array',
        items: {
          type: 'object',
          required: ['email', 'telephone1', 'telephone2', 'name', 'public', 'primary'],
          properties: {
            telephone1: { type: 'string', faker: 'phone.phoneNumber' },
            telephone2: { type: 'string', faker: 'phone.phoneNumber' },
            email: { type: 'string', format: 'email', faker: 'internet.email' },
            name: { type: 'string', faker: 'name.findName' },
            public: { type: 'boolean' },
            primary: { type: 'boolean' },
          },
        },
      },
      location: {
        type: 'object',
        required: ['address', 'postalZip', 'country', 'provinceState', 'point', 'city'],
        properties: {
          point: {
            type: 'object',
            required: ['type', 'coordinates'],
            properties: {
              type: { type: 'string', patten: 'Point' },
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
          address: { type: 'string', faker: 'address.streetAddress' },
          postalZip: { type: 'string', faker: 'address.zipCode' },
          city: { type: 'string', pattern: 'Montreal' },
          country: { type: 'string', pattern: 'Canada' },
          provinceState: { type: 'string', pattern: 'Québec' },
        },
      },
      lastVerifiedOn: { type: 'string', format: 'date-time' },
      openingHours: {
        type: 'array',
        items: {
          type: 'object',
          required: ['weekday', 'opensAt', 'closesAt', 'closed'],
          properties: {
            weekday: { type: 'integer', maximum: 0, minimum: 6 },
            closed: { type: 'boolean' },
            opensAt: { type: 'string' },
            closesAt: { type: 'string' },
          },
        },
        minItems: 7,
        maxItems: 7,
      },
      expires: { type: 'string', pattern: newDate.toDateString() },
      organizationName: { type: 'string', faker: 'company.companyName' },
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
