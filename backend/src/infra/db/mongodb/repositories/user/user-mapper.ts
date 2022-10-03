import { ObjectId } from 'mongodb';
import { UserDTO } from '../../../../../data/dto/user';
import { MongoHelper } from '../../helpers/mongo-helpers';

export const mapById = async (insertedId: ObjectId): Promise<UserDTO> => {
  const userCollection = await MongoHelper.getCollection('users');
  const result = await userCollection.findOne({
    _id: insertedId
  });

  const user = {
    id: result?._id.toString() ?? '',
    name: result?.name,
    email: result?.email,
    phone: result?.phone,
    birthDate: result?.birthDate,
    createdAt: result?.createdAt
  };
  return user;
};

export const mapByDocument = (document: any): UserDTO => {
  const { _id, ...documentWithoutId } = document;
  const user = { ...documentWithoutId, id: _id };
  return user as UserDTO;
};

export const mapList = (documents: any): UserDTO[] => {
  const result = documents.map((doc: any) => {
    const { _id, ...docWithoutId } = doc;

    return Object.assign({}, { ...docWithoutId, id: _id });
  });

  return result;
};
