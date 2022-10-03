import { Validation } from '../../../../presentation/protocols';
import { EmailValidation } from '../../../../validation/email-validation';
import { EmailValidatorAdapter } from '../../../../validation/email-validation-adapter';
import { RequiredFieldsValidation } from '../../../../validation/required-fields-validation';
import { ValidationComposite } from '../../../../validation/validation-composite';

export const makeAddUserValidation = (): Validation => {
  const fields = ['email', 'name', 'phone', 'birthDate'];
  const validations: Validation[] = [];

  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field));
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
