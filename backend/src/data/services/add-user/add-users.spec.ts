import { faker } from '@faker-js/faker';
import { AddUserService } from '.';
import { UserDTO } from '../../dto/user';
import { AddUserRepository } from '../../protocols/add-user-repository';

type MakeSutTypes = {
  sut: AddUserService;
  addUserRepositoryStub: AddUserRepository;
};

const makerUserParams = () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    birthDate: faker.date.past()
  };
  return user;
};

const makeAddUserRepositorySut = (): AddUserRepository => {
  class AddUserRepositoryStub implements AddUserRepository {
    async addUser(): Promise<UserDTO> {
      const user = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        birthDate: faker.date.past(),
        createdAt: faker.date.past()
      };

      return new Promise(resolve => resolve(user));
    }
  }
  return new AddUserRepositoryStub();
};
const makeSut = (): MakeSutTypes => {
  const addUserRepositoryStub = makeAddUserRepositorySut();
  const sut = new AddUserService(addUserRepositoryStub);
  return { sut, addUserRepositoryStub };
};

describe('Add User', () => {
  it('should be able create user ', async () => {
    const { sut } = makeSut();
    const user = makerUserParams();

    const result = await sut.execute(user);

    expect(result).toHaveProperty('id');
  });

  it('Should be able call addUser function with correct params', async () => {
    const { sut, addUserRepositoryStub } = makeSut();
    const user = makerUserParams();

    const listUserRepositoryStubSpy = jest.spyOn(
      addUserRepositoryStub,
      'addUser'
    );

    await sut.execute(user);

    expect(listUserRepositoryStubSpy).toBeCalledWith({
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthDate: user.birthDate
    });
  });

  it('Should throw exception case of failure int the addUser function', async () => {
    const { sut, addUserRepositoryStub } = makeSut();
    const user = makerUserParams();

    jest
      .spyOn(addUserRepositoryStub, 'addUser')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      );

    const promise = sut.execute(user);

    await expect(promise).rejects.toThrow();
  });
});
