import { genKits } from '../index';

interface IPropType {
  type: string;
  name: string;
}

describe('Public api kit functions', () => {
  it('generates expected number of objects, whose attributes are of correct type', async (done) => {
    const kits = await genKits(200);
    const KIT_PROP_TYPES: IPropType[] = [
      { name: '_id', type: 'string' },
      { name: 'hidden', type: 'boolean' },
      { name: 'location', type: 'object' },
      { name: 'lastVerified', type: 'object' },
      { name: 'openingHours', type: 'object' },
      { name: 'expires', type: 'object' },
      { name: 'organizationName', type: 'string' },
      { name: 'notes', type: 'object' },
      { name: 'createdBy', type: 'object' },
      { name: 'createdOn', type: 'string' },
      { name: 'lastVerifiedBy', type: 'object' },
      { name: 'lastEditedOn', type: 'string' },
      { name: 'lastEditedBy', type: 'object' },
      { name: 'contacts', type: 'object' },
    ];

    const test = KIT_PROP_TYPES.every((prop) =>
      kits.every((kit: any) => kit.hasOwnProperty(prop.name) && typeof kit[prop.name] === prop.type),
    );

    expect(test).toEqual(true);
    done();
  });

  it('generates 5 kits by default', async (done) => {
    const result = await genKits();
    expect(result.length).toEqual(5);
    done();
  });
});
