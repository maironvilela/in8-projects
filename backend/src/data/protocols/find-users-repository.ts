import { FindUsersUseCaseParams } from '../../domain/usecases';
import { UserDTO } from '../dto/user';

export interface FindUsersRepository {
  findUsers(data: FindUsersUseCaseParams): Promise<UserDTO[]>;
}
