import * as yup from 'yup';

export default yup.object({
  email: yup
    .string()
    .required('No email provided')
    .email('Incorrect email format'),
  username: yup
    .string()
    .required('No username provided')
    .min(3, 'Username is too short, 3 chars minimum.'),
  firstname: yup
    .string()
    .required('No first name provided')
    .min(3, 'First Name is too short, 3 chars minimum.'),
});
