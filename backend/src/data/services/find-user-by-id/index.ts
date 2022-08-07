import { User } from '../../../domain/models';
import { FindUserByIdUseCase } from '../../../domain/usecases';
import { FindUserByIdRepository } from '../../protocols/find-user-by-id';

export class FindUserByIdService implements FindUserByIdUseCase {
  constructor(private findUserByIdRepository: FindUserByIdRepository) {}
  async execute(id: string): Promise<User> {
    const user = await this.findUserByIdRepository.findUserById(id);
    return user;
  }
}
