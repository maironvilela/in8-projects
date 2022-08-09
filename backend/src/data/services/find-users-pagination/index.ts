import {
  FindUsersPaginationParams,
  FindUsersUseCase
} from '../../../domain/usecases';
import { UsersPaginationDTO } from '../../dto';
import { FindUsersPaginationRepository } from '../../protocols/find-users-pagination-repository';

export class FindUsersPaginationService implements FindUsersUseCase {
  constructor(
    private FindUsersPaginationRepository: FindUsersPaginationRepository,
  ) {}
  async execute(data: FindUsersPaginationParams): Promise<UsersPaginationDTO> {
    const result = await this.FindUsersPaginationRepository.findUsers(data);
    return result;
  }
}
