import { FindUsersPaginationService } from '../../../../data/services/find-users-pagination';
import { UserMongoRepository } from '../../../../infra/db/mongodb/repositories/user/user-mongo-repository';
import { FindUsersPaginationController } from '../../../../presentation/controllers/user/find-users-pagination-controller';
import { Controllers } from '../../../../presentation/protocols';

export const makeFindUsersPaginationControllerFactory = (): Controllers => {
  const FindUsersPaginationRepository = new UserMongoRepository();
  const findUsersPaginationService = new FindUsersPaginationService(
    FindUsersPaginationRepository,
  );
  return new FindUsersPaginationController(findUsersPaginationService);
};
