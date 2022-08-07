import { UserDTO } from '../../../../../data/dto/user';
import { AddUserRepository } from '../../../../../data/protocols/add-user-repository';
import { ListUsersRepository } from '../../../../../data/protocols/list-user-repository';
import { User } from '../../../../../domain/models';
import { AddUserParams } from '../../../../../domain/usecases';
import { MongoHelper } from '../../helpers/mongo-helpers';
import { mapById } from './user-mapper';

export class UserMongoRepository
  implements ListUsersRepository, AddUserRepository
{
  async listUsers(): Promise<UserDTO[]> {
    const userCollection = await MongoHelper.getCollection('users');
    const cursor = userCollection.find();

    const usersMongo = await cursor.toArray();

    const users = usersMongo.map(userMongo => {
      const { _id, ...userWithoutId } = userMongo;
      return Object.assign(userWithoutId, { id: _id.toString() });
    }) as User[];

    return users;
  }

  async addUser(data: AddUserParams): Promise<UserDTO> {
    const userCollection = await MongoHelper.getCollection('users');

    const { insertedId } = await userCollection.insertOne(data);

    const user = await mapById(insertedId);

    return user;
  }
}
