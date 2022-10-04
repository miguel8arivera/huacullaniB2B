import { FormikErrors, useFormik } from 'formik';
import { FormFormikbasic } from '../../helpers/type';
import '../../pages/styles/formStyle.css';

export default function FormikBasic() {
  const validate = ({ firstName, lastName, email }: FormFormikbasic) => {
    const errors: FormikErrors<FormFormikbasic> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.length >= 15) {
      errors.lastName = 'Must be 15 characters or less';
    }
    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });
  return (
    <div>
      <h1>Formik Basico</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onBlur={handleBlur}
          value={values.firstName}
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName"> Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onBlur={handleBlur}
          value={values.lastName}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email"> Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
