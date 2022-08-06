import { User } from '../../domain/models';
import { ListUsersUseCase } from '../../domain/usecases';

export class ListUsersService implements ListUsersUseCase {
  async execute(): Promise<User[]> {
    const listUser = [
      {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email',
        telefone: 'valid_telefone',
        nascimento: new Date(),
        createdAt: new Date(),
      },
    ];

    return new Promise(resolve => resolve(listUser));
  }
}
