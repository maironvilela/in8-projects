import { AddUserUseCase } from '../../../domain/usecases';
import { badRequest, ok } from '../../helpers/http-helpers';
import {
  Controllers,
  HttpRequest,
  HttpResponse,
  Validation
} from '../../protocols';

export class AddUserController implements Controllers {
  constructor(
    private AddUserService: AddUserUseCase,
    private readonly validation: Validation,
  ) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, email, telefone, nascimento } = request.body;

    const error = this.validation.validate(request.body);
    if (error) {
      return badRequest(error);
    }

    const user = await this.AddUserService.execute({
      name,
      email,
      telefone,
      nascimento,
    });
    return ok(user);
  }
}
