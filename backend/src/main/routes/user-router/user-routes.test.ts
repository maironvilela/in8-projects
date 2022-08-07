import { faker } from '@faker-js/faker';
import { Collection } from 'mongodb';
import request from 'supertest';
import { MongoHelper } from '../../../infra/db/mongodb/helpers/mongo-helpers';
import app from '../../config/app';

let accountCollection: Collection;

describe('AddUser router', () => {
  beforeAll(async () => {
    const uri = process.env.MONGO_URL ?? '';
    await MongoHelper.connect(uri);
  });
  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('users');
    await accountCollection.deleteMany({});
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  test('should success router addUser', async () => {
    const response = await request(app).post('/api/user').send({
      name: faker.name.findName(),
      email: faker.internet.email(),
      telefone: faker.phone.number(),
      nascimento: faker.date.past(),
    });

    console.log(response.body);
    expect(response.statusCode).toEqual(200);
  });
});
