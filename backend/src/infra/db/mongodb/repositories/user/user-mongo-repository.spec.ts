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

  it('should be able return user list ', async () => {
    const sut = new UserMongoRepository();

    await userCollection.insertOne({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      telefone: faker.phone.number(),
      nascimento: faker.date.past(),
      createdAt: faker.date.past(),
    });
    await userCollection.insertOne({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      telefone: faker.phone.number(),
      nascimento: faker.date.past(),
      createdAt: faker.date.past(),
    });

    const users = await sut.listUsers();

    expect(users.length).toEqual(2);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
    expect(users[0]).toHaveProperty('telefone');
    expect(users[0]).toHaveProperty('nascimento');
    expect(users[0]).toHaveProperty('createdAt');
  });

  it('Should be able save user', async () => {
    const sut = new UserMongoRepository();

    const data = makerUserParams();

    const user = await sut.addUser(data);
    expect(user).toHaveProperty('id');
  });
});
