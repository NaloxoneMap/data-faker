import { genUsers } from '../index';

describe('genUsers', () => {
  it('should generate an array of users  that all have the right properties', async () => {
    const users = await genUsers(20);
    const PROPERTIES = [
      '_id',
      'suspended',
      'activated',
      'invitedBy',
      'username',
      'lastLogin',
      'email',
      'invitedOn',
      'kitsAdded',
      'kitsModified',
      'kitsVerified',
      'kitsDeleted',
      'roles',
    ];
    const INVITE_PROPS = ['_id', 'username', 'email'];

    const test = PROPERTIES.every((prop) => users.every((user) => user.hasOwnProperty(prop)));
    const inviteTest = INVITE_PROPS.every((prop) => users.every((user) => user.invitedBy.hasOwnProperty(prop)));

    expect(test).toEqual(true);
    expect(inviteTest).toEqual(true);
  });
});
