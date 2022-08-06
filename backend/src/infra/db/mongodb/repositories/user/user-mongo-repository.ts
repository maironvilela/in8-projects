import { UserDTO } from '../../../../../data/dto/user';
import { ListUsersRepository } from '../../../../../data/protocols/ListUsersRepository';
import { User } from '../../../../../domain/models';
import { MongoHelper } from '../../helpers/mongo-helpers';

export class UserMongoRepository implements ListUsersRepository {
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
}
