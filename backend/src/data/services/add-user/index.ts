import { AddUserParams, AddUserUseCase } from '../../../domain/usecases';
import { UserDTO } from '../../dto/user';
import { AddUserRepository } from '../../protocols/add-user-repository';

export class AddUserService implements AddUserUseCase {
  constructor(private addUserRepository: AddUserRepository) {}

  async execute(data: AddUserParams): Promise<UserDTO> {
    const user = await this.addUserRepository.addUser(data);

    return user;
  }
}
