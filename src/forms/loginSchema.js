import * as yup from 'yup';

const LoginSchema = yup.object({
  username: yup.string().required('No username provided'),
  password: yup.string().required('No password provided'),
});
export default LoginSchema;
