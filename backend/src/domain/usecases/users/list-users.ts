import { User } from '../../models';

export interface ListUsers {
  execute(): Promise<User>;
}
