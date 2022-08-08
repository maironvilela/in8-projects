import { User } from '../../models';

export type FindUsersUseCaseParams = {
  skip: number;
  limit: number;
};

export interface FindUsersUseCase {
  execute(data: FindUsersUseCaseParams): Promise<User[]>;
}
