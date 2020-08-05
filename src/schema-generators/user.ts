import { usersSchema } from '../schemas';
import { Types } from 'mongoose';

export const userSchemaGen = (num?: number) => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns a JSONSchema object that conforms to the User shema.
   */

  const schema: any = { ...usersSchema };
  const props = schema.items.properties;
  // Setting minItems tells generator to create specified number of items
  schema.minItems = num || 5; // Default
  schema.maxItems = num || 5;
  props._id.faker = Types.ObjectId();
  props.email.faker = 'internet.email';
  props.username.faker = 'internet.username';
  props.invited_by.properties.username.faker = 'internet.username';
  return schema;
};
