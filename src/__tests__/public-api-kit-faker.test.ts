import { genPublicApiKit } from '../index';
import { PublicApiKit } from '../interfaces';

describe('Public api kit functions', () => {
  it('generates expected number of objects, whose attributes are of correct type', async (done) => {
    const result = await genPublicApiKit(10);
    result.forEach((item: PublicApiKit) => {
      const { location, notes, openingHours } = item;
      const { point } = location;
      expect(typeof item._id).toEqual('string');
      expect(typeof item.location).toEqual('object');
      expect(typeof item.lastVerified).toEqual('object');

      expect(typeof item.expires).toEqual('object');
      expect(typeof item.organizationName).toEqual('string');
      expect(typeof notes).toEqual('object');

      if (openingHours) {
        openingHours.forEach((day) => {
          expect(typeof day.weekday).toEqual('number');
          const regex = RegExp('[0-6]');
          expect(regex.test(day.weekday.toString())).toBe(true);
          expect(typeof day.opensAt).toEqual('string');
          expect(typeof day.closesAt).toEqual('string');
        });
      }
      if (notes) {
        notes.forEach((note) => {
          expect(typeof note.locale).toEqual('string');
          expect(typeof note.content).toEqual('string');
        });
      }

      expect(typeof location.address).toEqual('string');
      expect(typeof location.postalZip).toEqual('string');
      expect(typeof location.country).toEqual('string');
      expect(typeof location.address).toEqual('string');
      expect(typeof location.provinceState).toEqual('string');
      expect(typeof point).toEqual('object');
      expect(point.type).toEqual('Point');
      expect(typeof point.coordinates).toEqual('object');
      expect(typeof point.coordinates.lat).toEqual('number');
      expect(typeof point.coordinates.lon).toEqual('number');
    });
    expect(result.length).toEqual(10);
    done();
  });

  it('generates 5 kits by default', async (done) => {
    const result = await genPublicApiKit();
    expect(result.length).toEqual(5);
    done();
  });
});
