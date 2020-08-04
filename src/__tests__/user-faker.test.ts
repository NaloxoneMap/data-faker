import { genUsers } from '../index';

describe('genUsers', () => {
  it('should generate an array of users  that all have the right properties', async () => {
    const users = await genUsers(20);
    const PROPERTIES = [
      '_id',
      'suspended',
      'activated',
      'invited_by',
      'username',
      'email',
      'created_at',
      'kits_added',
      'kits_modified',
      'roles',
    ];
    const INVITE_PROPS = ['_id', 'username', 'email'];

    const test = PROPERTIES.every((prop) => users.every((user) => user.hasOwnProperty(prop)));
    const inviteTest = INVITE_PROPS.every((prop) => users.every((user) => user.invited_by.hasOwnProperty(prop)));

    expect(test).toEqual(true);
    expect(inviteTest).toEqual(true);
  });
});
