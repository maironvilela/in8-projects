import { UserDTO } from '../dto/user';

export interface ListUsersRepository {
  listUsers(): Promise<UserDTO[]>;
}
