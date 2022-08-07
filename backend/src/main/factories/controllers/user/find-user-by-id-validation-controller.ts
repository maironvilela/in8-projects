import { Validation } from '../../../../presentation/protocols';
import { RequiredFieldsValidation } from '../../../../validation/required-fields-validation';
import { ValidationComposite } from '../../../../validation/validation-composite';

export const makeFindUserByIdValidation = (): Validation => {
  const fields = ['id'];
  const validations: Validation[] = [];

  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field));
  }

  return new ValidationComposite(validations);
};
