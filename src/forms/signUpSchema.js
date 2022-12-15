import * as yup from 'yup';

const SignSchema = yup.object({
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
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password must be 8 chars minimum')
    .test(
      'strong-pwd',
      'Password must at least contain : \n- One lowercase \n- One number  \n- One special Character',
      val => {
        return (
          /\d/.test(val) &&
          /[a-z]/.test(val) &&
          /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val)
        );
      },
    ),
  confpassword: yup
    .string()
    .required('No password confirmation provided')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
export default SignSchema;
