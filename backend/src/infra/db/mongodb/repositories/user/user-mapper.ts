import { ObjectId } from 'mongodb';
import { UserDTO } from '../../../../../data/dto/user';
import { MongoHelper } from '../../helpers/mongo-helpers';

export const mapById = async (insertedId: ObjectId): Promise<UserDTO> => {
  const accountCollection = await MongoHelper.getCollection('users');
  const result = await accountCollection.findOne({
    _id: insertedId,
  });

  const user = {
    id: result?._id.toString() ?? '',
    name: result?.name,
    email: result?.email,
    telefone: result?.telefone,
    nascimento: result?.nascimento,
    createdAt: result?.createdAt,
  };
  return user;
};

export const mapByDocument = (document: any): UserDTO => {
  const { _id, ...documentWithoutId } = document;
  const user = { ...documentWithoutId, id: _id };
  return user as UserDTO;
};
