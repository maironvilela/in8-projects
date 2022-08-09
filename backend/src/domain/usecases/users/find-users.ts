import { UsersPaginationDTO } from '../../../data/dto';

export type FindUsersPaginationParams = {
  skip: number;
  limit: number;
};

export interface FindUsersUseCase {
  execute(data: FindUsersPaginationParams): Promise<UsersPaginationDTO>;
}
