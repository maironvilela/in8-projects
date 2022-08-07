import { InvalidParamError } from '../../presentation/error';
import { EmailValidator, Validation } from '../../presentation/protocols';

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator,
  ) {}

  validate(input: any): Error | null {
    const isValidEmail = this.emailValidator.validate(input[this.fieldName]);

    if (!isValidEmail) {
      return new InvalidParamError(this.fieldName);
    }
    return null;
  }
}
