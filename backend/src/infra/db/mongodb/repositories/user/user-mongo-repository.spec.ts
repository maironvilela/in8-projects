/* eslint-disable @typescript-eslint/no-base-to-string */
import { faker } from '@faker-js/faker';
import { Collection } from 'mongodb';
import { MongoHelper } from '../../helpers/mongo-helpers';
import { UserMongoRepository } from './user-mongo-repository';

let userCollection: Collection;

const makerUserParams = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    telefone: faker.phone.number(),
    nascimento: faker.date.past(),
  };
};

describe('User Mongo Repository', () => {
  beforeAll(async () => {
    const uri = process.env.MONGO_URL ?? '';
    await MongoHelper.connect(uri);
  });
  beforeEach(async () => {
    userCollection = await MongoHelper.getCollection('users');
    await userCollection.deleteMany({});
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  it('Should be able save user', async () => {
    const sut = new UserMongoRepository();

    const data = makerUserParams();

    const user = await sut.addUser(data);
    expect(user).toHaveProperty('id');
  });

  it('Should be able find user by id', async () => {
    const sut = new UserMongoRepository();

    const data = makerUserParams();

    const userSave = await sut.addUser(data);

    const user = await sut.findUserById(userSave.id.toString());

    expect(user).toHaveProperty('id');
    expect(user.id).toBeTruthy();
    expect(user).toEqual(userSave);
  });
});
