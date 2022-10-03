import { AddUserUseCase } from '../../../domain/usecases';
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

export class AddUserController implements Controllers {
  constructor(
    private AddUserService: AddUserUseCase,
    private readonly validation: Validation
  ) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, phone, birthDate } = request.body;

      console.log(request.body);

      const error = this.validation.validate(request.body);
      if (error) {
        return badRequest(error);
      }
      const user = await this.AddUserService.execute({
        name,
        email,
        phone,
        birthDate
      });
      return ok(user);
    } catch (err) {
      return internalServerError(err as Error);
    }
  }
}
