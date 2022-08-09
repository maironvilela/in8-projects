import { FindUsersPaginationParams } from '../../domain/usecases';
import { UsersPaginationDTO } from '../dto';

export interface FindUsersPaginationRepository {
  findUsers(data: FindUsersPaginationParams): Promise<UsersPaginationDTO>;
}
