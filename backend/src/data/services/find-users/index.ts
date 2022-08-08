import { User } from '../../../domain/models';
import {
  FindUsersUseCase,
  FindUsersUseCaseParams
} from '../../../domain/usecases';
import { FindUsersRepository } from '../../protocols/find-users-repository';

export class FindUsersService implements FindUsersUseCase {
  constructor(private findUsersRepository: FindUsersRepository) {}
  async execute(data: FindUsersUseCaseParams): Promise<User[]> {
    const users = await this.findUsersRepository.findUsers(data);
    return users;
  }
}
