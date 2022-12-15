import * as yup from 'yup';

const ContactSchema = yup.object({
  email: yup
    .string()
    .required('No email provided')
    .email('Incorrect email format'),
  message: yup.string().required("You haven't written any message!"),
});
export default ContactSchema;
