import { User } from '../../models';

export type AddUserParams = {
  name: string;
  email: string;
  nascimento: Date;
  telefone: string;
};

export interface AddUserUseCase {
  execute(data: AddUserParams): Promise<User>;
}
