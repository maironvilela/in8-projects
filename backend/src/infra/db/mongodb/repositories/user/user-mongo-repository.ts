import { ObjectId } from 'mongodb';
import { UserDTO } from '../../../../../data/dto/user';
import { AddUserRepository } from '../../../../../data/protocols/add-user-repository';
import { FindUserByIdRepository } from '../../../../../data/protocols/find-user-by-id';
import { FindUsersRepository } from '../../../../../data/protocols/find-users-repository';
import { User } from '../../../../../domain/models';
import {
  AddUserParams,
  FindUsersUseCaseParams
} from '../../../../../domain/usecases';
import { MongoHelper } from '../../helpers/mongo-helpers';
import { mapById } from './user-mapper';

export class UserMongoRepository
  implements FindUserByIdRepository, AddUserRepository, FindUsersRepository
{
  async findUsers({ skip, limit }: FindUsersUseCaseParams): Promise<UserDTO[]> {
    const userCollection = await MongoHelper.getCollection('users');
    const result = await userCollection
      .find<UserDTO>({})
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 })
      .toArray();

    return result;
  }
  async findUserById(id: string): Promise<User> {
    const user = await mapById(new ObjectId(id));
    return user;
  }

  async addUser(data: AddUserParams): Promise<UserDTO> {
    const userCollection = await MongoHelper.getCollection('users');

    const { insertedId } = await userCollection.insertOne(
      Object.assign({}, data, { createdAt: new Date() }),
    );

    const user = await mapById(insertedId);

    return user;
  }
}
