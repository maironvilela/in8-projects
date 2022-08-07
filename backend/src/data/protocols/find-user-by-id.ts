import { UserDTO } from '../dto/user';

export interface FindUserByIdRepository {
  findUserById(id: string): Promise<UserDTO>;
}
