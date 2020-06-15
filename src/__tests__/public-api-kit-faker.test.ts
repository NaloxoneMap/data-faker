import { genPublicApiKit } from '../index';
import { Kit } from '../interfaces';

describe('Public api kit functions', () => {
  it('generates expected number of objects, whose attributes are of correct type', async (done) => {
    const result = await genPublicApiKit(10);
    result.forEach((item: Kit) => {
      const { location, notes } = item;
      const { point } = location;
      expect(typeof item._id).toEqual('string');
      expect(typeof item.location).toEqual('object');
      expect(typeof item.lastVerified).toEqual('string');
      expect(typeof item.opensAt).toEqual('string');
      expect(typeof item.closesAt).toEqual('string');
      expect(typeof item.openOn).toEqual('object');
      // Disabled due to bug in faker.
      // Dates at 0ms past minute are strings. Others are objects.
      // expect(typeof item.expires).toEqual('object');
      expect(typeof item.organizationName).toEqual('string');
      expect(typeof notes).toEqual('object');

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
});
