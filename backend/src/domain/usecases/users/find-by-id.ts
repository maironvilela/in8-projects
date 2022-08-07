import { User } from '../../models';

export interface FindUserByIdUseCase {
  execute(id: string): Promise<User>;
}
