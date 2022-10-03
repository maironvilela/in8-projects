import { faker } from '@faker-js/faker';
import { FindUserByIdService } from '.';
import { UserDTO } from '../../dto/user';
import { FindUserByIdRepository } from '../../protocols/find-user-by-id';

type MakeSutTypes = {
  sut: FindUserByIdService;
  findUserByIdRepositoryStub: FindUserByIdRepository;
};

const userId = faker.datatype.uuid();

const makeFindUserByIdRepositorySut = (): FindUserByIdRepository => {
  class FindUserByIdRepositoryStub implements FindUserByIdRepository {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async findUserById(id: string): Promise<UserDTO> {
      const user = {
        id: userId,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        birthDate: faker.date.past(),
        createdAt: faker.date.past()
      };

      return new Promise(resolve => resolve(user));
    }
  }
  return new FindUserByIdRepositoryStub();
};
const makeSut = (): MakeSutTypes => {
  const findUserByIdRepositoryStub = makeFindUserByIdRepositorySut();
  const sut = new FindUserByIdService(findUserByIdRepositoryStub);
  return { sut, findUserByIdRepositoryStub };
};

describe('Find Users By Id', () => {
  it('should be able return user ', async () => {
    const { sut } = makeSut();
    const user = await sut.execute(userId);
    expect(user).toHaveProperty('id');
    expect(user.id).toBeTruthy();
  });
  it('Should be able call findUserById function with correct params', async () => {
    const { sut, findUserByIdRepositoryStub } = makeSut();

    const listUserRepositoryStubSpy = jest.spyOn(
      findUserByIdRepositoryStub,
      'findUserById'
    );

    await sut.execute(userId);

    expect(listUserRepositoryStubSpy).toBeCalledWith(userId);
  });

  it('Should throw exception case of failure int the addUser function', async () => {
    const { sut, findUserByIdRepositoryStub } = makeSut();

    jest
      .spyOn(findUserByIdRepositoryStub, 'findUserById')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      );

    const promise = sut.execute(userId);

    await expect(promise).rejects.toThrow();
  });
});
