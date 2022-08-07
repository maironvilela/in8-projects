import { Router } from 'express';
import { expressRouterAdapter } from '../../adapters/express/express-router-adapter';
import { makeAddUserControllerFactory } from '../../factories/controllers/user/add-user-controller-factory';
import { makeFindUserByIdControllerFactory } from '../../factories/controllers/user/find-user-by-user-controller-factory';

export default (router: Router): void => {
  router.post('/users', expressRouterAdapter(makeAddUserControllerFactory()));
  router.get(
    '/users/:id',
    expressRouterAdapter(makeFindUserByIdControllerFactory()),
  );
};
