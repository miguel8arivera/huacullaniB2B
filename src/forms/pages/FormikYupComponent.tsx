import { Formik, Field, ErrorMessage, Form } from 'formik';

import * as Yup from 'yup';
import '../../pages/styles/formStyle.css';

export default function FormikYupComponent() {
  return (
    <div>
      <h1>Formik Yup Component</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: '',
          plan: '',
          date: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required').max(15, 'Must be 15 characters or less'),
          lastName: Yup.string().required('Required').max(15, 'Must be 15 characters or less'),
          email: Yup.string().email('Invalid email address').required('Required'),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
          plan: Yup.string()
            .required()
            .oneOf(['free', 'premium', 'enterprise'], 'You must select a plan'),
          date: Yup.date().required('Required').min(new Date(), 'You must select a future date'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName"> First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName"> Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email"> Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label htmlFor="plan"> Plan</label>
            <Field name="plan" as="select">
              <option>Select your plan</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </Field>
            <ErrorMessage name="plan" component="span" />

            <label htmlFor="date">Date</label>
            <Field name="date" type="date" />
            <ErrorMessage name="date" component="span" />

            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
