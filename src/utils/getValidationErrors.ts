import { ValidationError } from 'yup';

import ErrorProps from '../interfaces/ErrorProps';

export default function getValidationErrors(err: ValidationError): ErrorProps {
  const validationErrors: ErrorProps = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
