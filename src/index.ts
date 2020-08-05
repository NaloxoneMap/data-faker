import { PublicApiKit, User } from './interfaces';
import jsf from './jsf';
import { randCoords } from './util';
import { publicApiKitSchemaGen } from './schema-generators/publicApiKit';
import { userSchemaGen } from './schema-generators/user';
import { Types } from 'mongoose';

const _generate = async (schema: any): Promise<any[]> => {
  return await jsf.resolve(schema);
};

export const genPublicApiKit = async (num?: number): Promise<PublicApiKit[]> => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns an array of valid Kit objects.
   */
  const data = await _generate(publicApiKitSchemaGen(num));

  return data.map((item: PublicApiKit, index: number) => {
    // Some of the fake data should be expired.
    if (index < 3) {
      const date = new Date();
      date.setMonth(date.getMonth() - 3);
      item.expires = date;
    }
    item._id = Types.ObjectId().toHexString();
    item.expires = new Date(item.expires);
    item.lastVerified = new Date(item.lastVerified);
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

  const data = await _generate(userSchemaGen(num));

  return data.map((user: User) => {
    user._id = Types.ObjectId().toHexString();
    user.activated = true;
    user.suspended = false;
    return user;
  });
};

export { PublicApiKit, User };
