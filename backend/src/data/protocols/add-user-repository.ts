import { UserDTO } from '../dto/user';

export type AddUserParams = {
  name: string;
  email: string;
  nascimento: Date;
  telefone: string;
};
export interface AddUserRepository {
  addUser(data: AddUserParams): Promise<UserDTO>;
}
