import { AddUserService } from '../../../../data/services/add-user';
import { UserMongoRepository } from '../../../../infra/db/mongodb/repositories/user/user-mongo-repository';
import { AddUserController } from '../../../../presentation/controllers/user/add-user-controller';
import { makeAddUserValidation } from './add-user-validation-controller';

export const makeAddUserControllerFactory = () => {
  const validation = makeAddUserValidation();
  const addUserRepository = new UserMongoRepository();
  const addUserService = new AddUserService(addUserRepository);
  return new AddUserController(addUserService, validation);
};
