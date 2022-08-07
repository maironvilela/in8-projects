import { FindUserByIdUseCase } from '../../../domain/usecases';
import { ok } from '../../helpers/http-helpers';
import {
  Controllers,
  HttpRequest,
  HttpResponse,
  Validation
} from '../../protocols';

export class FindUserByIdController implements Controllers {
  constructor(
    private findUserByIdService: FindUserByIdUseCase,
    private readonly validation: Validation,
  ) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    console.log(request.params);
    /*
    try {
      console.log('findUserByIdService');
      console.log('Params: ', request.params.id);

      const id = '123';
      const error = this.validation.validate(request.body);
      if (error) {
        return badRequest(error);
      }
      const user = await this.findUserByIdService.execute(id);

      return ok(user);
    } catch (err) {
      return internalServerError(err as Error);
    }*/
    return ok({ request });
  }
}
