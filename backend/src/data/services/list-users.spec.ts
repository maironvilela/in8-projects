import { ListUsersService } from './list-users';

describe('List Users', () => {
  it('should be able return users list ', async () => {
    const listUsersService = new ListUsersService();
    const result = await listUsersService.execute();
    expect(result.length).not.toEqual(0);
  });
});
