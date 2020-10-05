import { kitSchema, usersSchema } from './schemas';
import { Kit, User } from './interfaces';
import jsf from './jsf';
import { randCoords } from './util';

import { Types } from 'mongoose';

const _generate = async (schema: any): Promise<any[]> => {
  return await jsf.resolve(schema);
};

const _addMin = (schema: any, num?: number) => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   * @return: the original schema with minItems and maxItems properties added.
   */

  // Setting minItems tells generator to create specified number of items
  schema.minItems = num || 5; // Default 5
  schema.maxItems = num || 5;

  return schema;
};

export const genKits = async (num?: number): Promise<Kit[]> => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns an array of valid Kit objects.
   */
  const data = await _generate(_addMin(kitSchema, num));

  return data.map((item: Kit, index: number) => {
    // Some of the fake data should be expired.
    if (index < 3) {
      const date = new Date();
      date.setMonth(date.getMonth() - 3);
      item.expires = date;
    }

    const DAYS = [0, 1, 2, 3, 4, 5, 6];
    // Must be objectId, else find by id won't work.
    item._id = Types.ObjectId();
    item.expires = new Date(item.expires);
    item.lastVerifiedOn = new Date(item.lastVerifiedOn);

    const newHours = item.openingHours.map((day, i) => {
      day.weekday = DAYS[i];
      return day;
    });

    item.openingHours = newHours;
    // Need to generate own coordinates because of bug
    // in faker library
    item.location.point.coordinates = randCoords();
    return item;
  });
};

export const genUsers = async (num?: number): Promise<User[]> => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns an array of valid User objects.
   */

  const data = await _generate(_addMin(usersSchema, num));

  return data.map((user: User) => {
    user._id = Types.ObjectId();
    user.activated = true;
    user.suspended = false;
    user.invitedBy._id = Types.ObjectId();
    return user;
  });
};

export { Kit, User };
