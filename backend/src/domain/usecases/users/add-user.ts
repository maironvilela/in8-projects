import { User } from '../../models';

export type AddUserParams = {
  name: string;
  email: string;
  birthDate: Date;
  phone: string;
};

export interface AddUserUseCase {
  execute(data: AddUserParams): Promise<User>;
}
