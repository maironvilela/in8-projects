import { FindUsersUseCase } from '../../../domain/usecases';
import { internalServerError, ok } from '../../helpers/http-helpers';
import { Controllers, HttpRequest, HttpResponse } from '../../protocols';

export class FindUsersController implements Controllers {
  constructor(private findUsersService: FindUsersUseCase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { skip, limit } = request.query;

    console.log({ skip, limit });
    try {
      const user = await this.findUsersService.execute({
        skip: Number(skip),
        limit: Number(limit),
      });
      return ok(user);
    } catch (err) {
      console.log(err);
      console.log(err);
      return internalServerError(err as Error);
    }
  }
}
