import { User } from '../../../domain/models';
import { ListUsersUseCase } from '../../../domain/usecases';
import { ListUsersRepository } from '../../protocols/list-user-repository';

export class ListUsersService implements ListUsersUseCase {
  constructor(private listUsersRepository: ListUsersRepository) {}
  async execute(): Promise<User[]> {
    const userList = await this.listUsersRepository.listUsers();

    return new Promise(resolve => resolve(userList));
  }
}
