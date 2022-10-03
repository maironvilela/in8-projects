import { UserDTO } from '../dto/user';

export type AddUserParams = {
  name: string;
  email: string;
  birthDate: Date;
  phone: string;
};
export interface AddUserRepository {
  addUser(data: AddUserParams): Promise<UserDTO>;
}
