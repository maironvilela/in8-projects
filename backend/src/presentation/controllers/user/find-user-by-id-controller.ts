import { FindUserByIdUseCase } from '../../../domain/usecases';
import {
  badRequest,
  internalServerError,
  ok
} from '../../helpers/http-helpers';
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
    try {
      const id = request.params.id;

      const error = this.validation.validate(request.params);
      if (error) {
        return badRequest(error);
      }
      const user = await this.findUserByIdService.execute(id);

      return ok(user);
    } catch (err) {
      console.log(err);
      return internalServerError(err as Error);
    }
  }
}
