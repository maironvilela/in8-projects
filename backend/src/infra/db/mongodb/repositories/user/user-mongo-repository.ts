import { ObjectId } from 'mongodb';
import { UsersPaginationDTO } from '../../../../../data/dto';
import { UserDTO } from '../../../../../data/dto/user';
import { AddUserRepository } from '../../../../../data/protocols/add-user-repository';
import { FindUserByIdRepository } from '../../../../../data/protocols/find-user-by-id';
import { FindUsersPaginationRepository } from '../../../../../data/protocols/find-users-pagination-repository';
import { User } from '../../../../../domain/models';
import {
  AddUserParams,
  FindUsersPaginationParams
} from '../../../../../domain/usecases';
import { MongoHelper } from '../../helpers/mongo-helpers';
import { mapById } from './user-mapper';

export class UserMongoRepository
  implements
    FindUserByIdRepository,
    AddUserRepository,
    FindUsersPaginationRepository
{
  async findUsers({
    skip,
    limit,
  }: FindUsersPaginationParams): Promise<UsersPaginationDTO> {
    const userCollection = await MongoHelper.getCollection('users');
    const totalPage = await userCollection.count({});
    const users = await userCollection
      .find<UserDTO>({})
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 })
      .toArray();

    return {
      users,
      totalPage,
    };
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
