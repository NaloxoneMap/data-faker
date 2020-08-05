import { publicApiKitSchema } from '../schemas';
import { Types } from 'mongoose';

export const publicApiKitSchemaGen = (num?: number) => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns a JSONSchema object that matches the data
   * expected by the public api.
   */

  const schema: any = { ...publicApiKitSchema };
  const props = schema.items.properties;
  // Setting minItems tells generator to create specified number of items
  schema.minItems = num || 5; // Default
  schema.maxItems = num || 5;
  const location = props.location.properties;
  const point = location.point.properties;
  // Make expiration date in the future
  const newDate = new Date();
  newDate.setMonth(newDate.getMonth() + 1);
  props.expires.pattern = newDate.toDateString();
  // Setting .faker attributes specifies data generation rules
  props._id = Types.ObjectId();
  props.organizationName.faker = 'company.companyName';
  location.provinceState.pattern = 'Québec'; // Include accent to test that search ignores diacritics
  location.address.faker = 'address.streetAddress';
  location.city.faker = 'address.city';
  location.country.pattern = 'Canada';
  location.postalZip.faker = 'address.zipCode';
  point.type.pattern = 'Point';
  return schema;
};
