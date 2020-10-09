import { genKits } from '../index';
import { Kit } from '../interfaces';

interface IPropType {
  type: string;
  name: string;
}

describe('Public api kit functions', () => {
  let kits: Kit[];

  beforeAll(async () => {
    kits = await genKits(200);
  });

  it('generates expected number of objects, whose attributes are of correct type', async (done) => {
    const KIT_PROP_TYPES: IPropType[] = [
      { name: '_id', type: 'object' },
      { name: 'hidden', type: 'boolean' },
      { name: 'location', type: 'object' },
      { name: 'lastVerifiedOn', type: 'object' },
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

    const CONTACT_PROP_TYPES: IPropType[] = [
      { name: 'name', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'telephone1', type: 'string' },
      { name: 'telephone2', type: 'string' },
      { name: 'primary', type: 'boolean' },
      { name: 'public', type: 'boolean' },
    ];

    const OPENING_HOURS_TYPES: IPropType[] = [
      { name: 'weekday', type: 'number' },
      { name: 'opensAt', type: 'string' },
      { name: 'closesAt', type: 'string' },
      { name: 'closed', type: 'boolean' },
    ];

    const test = KIT_PROP_TYPES.every((prop) =>
      kits.every((kit: any) => kit.hasOwnProperty(prop.name) && typeof kit[prop.name] === prop.type),
    );

    const testContacts = CONTACT_PROP_TYPES.every((prop) =>
      kits.every(({ contacts }) =>
        contacts.every((contact: any) => contact.hasOwnProperty(prop.name) && typeof contact[prop.name] === prop.type),
      ),
    );

    const testHours = OPENING_HOURS_TYPES.every((prop) =>
      kits.every(({ openingHours }) =>
        openingHours.every((day: any) => day.hasOwnProperty(prop.name) && typeof day[prop.name] === prop.type),
      ),
    );

    expect(test).toEqual(true);
    expect(testContacts).toEqual(true);
    expect(testHours).toEqual(true);
    done();
  });

  it('generates 5 kits by default', async (done) => {
    const result = await genKits();
    expect(result.length).toEqual(5);
    done();
  });

  it('closed should be true if opensAt or closedAt is empty', () => {
    kits.forEach((kit) => {
      kit.openingHours.forEach(({ closesAt, opensAt, closed }) => {
        console.log(`closes: ${closesAt}`, opensAt, closed);
        if (closesAt === '') {
          expect(opensAt).toEqual('');
          expect(closed).toEqual(true);
        }

        if (opensAt === '') {
          expect(closesAt).toEqual('');
          expect(closed).toEqual(true);
        }

        if (!closed) {
          const reg = RegExp(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
          expect(reg.test(opensAt)).toBeTruthy();
          expect(reg.test(closesAt)).toBeTruthy();
        }
      });
    });
  });
});
