import { User } from '../../models';

export interface ListUsersUseCase {
  execute(): Promise<User[]>;
}
