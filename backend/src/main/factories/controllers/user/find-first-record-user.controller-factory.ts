import { FindUsersService } from '../../../../data/services/find-users';
import { UserMongoRepository } from '../../../../infra/db/mongodb/repositories/user/user-mongo-repository';
import { FindUsersController } from '../../../../presentation/controllers/user/find-users-controller';
import { Controllers } from '../../../../presentation/protocols';

export const makeFindUsersControllerFactory = (): Controllers => {
  const findUsersRepository = new UserMongoRepository();
  const findUsersService = new FindUsersService(findUsersRepository);
  return new FindUsersController(findUsersService);
};
