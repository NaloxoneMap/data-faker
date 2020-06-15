import { Kit } from './interfaces';
import jsf from './jsf';
import { makeTypesObj, randCoords } from './util';
import { publicApiKitSchemaGen } from './publicApiKit';

const _generate = async (schema: any): Promise<any[]> => {
  return await jsf.resolve(schema);
};

export const genPublicApiKit = async (num: number): Promise<Kit[]> => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   *
   * @returns an array of valid Kit objects.
   */
  const data = await _generate(publicApiKitSchemaGen(num));

  return data.map((item: Kit, index: number) => {
    // Some of the fake data should be expired.
    if (index < 3) {
      const date = new Date();
      date.setMonth(date.getMonth() - 3);
      item.expires = date;
    }
    // Need to generate own coordinates because of bug
    // in faker library
    item.location.point.coordinates = randCoords();
    return item;
  });
};

export const publicApiTypeObjGen = (key: string): { [key: string]: string } => {
  /**
   * @param {key}: Key of the the JSONSchema object
   *
   * @summary: Input a key, and get a {key: value} pair where the value
   * is the expected type of an attribute at that key on a Kit object.
   * Used for testing return types.
   */
  return makeTypesObj(publicApiKitSchemaGen()[key]);
};
