import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  bike_id: yup.string().nullable(),
  bike_name: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
