import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  information: yup.string().required(),
  owner_id: yup.string().nullable().required(),
});
