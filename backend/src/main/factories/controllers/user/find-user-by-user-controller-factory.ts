import { FindUserByIdService } from '../../../../data/services/find-user-by-id';
import { UserMongoRepository } from '../../../../infra/db/mongodb/repositories/user/user-mongo-repository';
import { FindUserByIdController } from '../../../../presentation/controllers/user/find-user-by-id-controller';
import { makeFindUserByIdValidation } from './find-user-by-id-validation-controller';

export const makeFindUserByIdControllerFactory = () => {
  const validation = makeFindUserByIdValidation();
  const findUserByIdRepository = new UserMongoRepository();
  const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
  return new FindUserByIdController(findUserByIdService, validation);
};
