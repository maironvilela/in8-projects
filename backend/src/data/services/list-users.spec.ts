import { faker } from '@faker-js/faker';
import { ListUsersUseCase } from '../../domain/usecases';
import { UserDTO } from '../dto/user';
import { ListUsersRepository } from '../protocols/ListUsersRepository';
import { ListUsersService } from './list-users';

type MakeSutTypes = {
  sut: ListUsersUseCase;
  listUserRepositoryStub: ListUsersRepository;
};

const makeListUserRepositorySut = (): ListUsersRepository => {
  class ListUserRepositoryStub implements ListUsersRepository {
    async listUsers(): Promise<UserDTO[]> {
      const userList: UserDTO[] = [];

      for (let i = 0; i < 10; i++) {
        userList.push({
          id: faker.datatype.uuid(),
          name: faker.name.findName(),
          email: faker.internet.email(),
          telefone: faker.phone.number(),
          nascimento: faker.date.past(),
          createdAt: faker.date.past(),
        });
      }

      return new Promise(resolve => resolve(userList));
    }
  }
  return new ListUserRepositoryStub();
};
const makeSut = (): MakeSutTypes => {
  const listUserRepositoryStub = makeListUserRepositorySut();
  const sut = new ListUsersService(listUserRepositoryStub);
  return { sut, listUserRepositoryStub };
};

describe('List Users', () => {
  it('should be able return users list ', async () => {
    const { sut } = makeSut();
    const result = await sut.execute();
    expect(result.length).not.toEqual(0);
  });

  it('Should be able call listUser function from the repository layer', async () => {
    const { sut, listUserRepositoryStub } = makeSut();

    const listUserRepositoryStubSpy = jest.spyOn(
      listUserRepositoryStub,
      'listUsers',
    );

    await sut.execute();

    expect(listUserRepositoryStubSpy).toBeCalled();
  });

  it('should throw exception case of failure int the listUser function', async () => {
    const { sut, listUserRepositoryStub } = makeSut();

    jest
      .spyOn(listUserRepositoryStub, 'listUsers')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error())),
      );

    const promise = sut.execute();

    await expect(promise).rejects.toThrow();
  });
});
