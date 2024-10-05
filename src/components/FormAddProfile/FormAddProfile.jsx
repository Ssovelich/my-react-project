import { ErrorMessage, Formik, Form, Field } from "formik";
import styles from "./FormAddProfile.module.css";
import { AddProfileSchema } from "../../utils/schemas";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  status: "", // "online" | "offline"
  hasPhysicalAddress: false,
};

const FormAddProfile = ({ onAddProfile }) => {
  const handleSubmit = (values, actions) => {
    onAddProfile(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={AddProfileSchema}
    >
      {(form) => (
        <Form className={styles.form}>
          {form.values.name === "#happynewyear2025" && (
            <h2 className={styles.promoCode}>
              Congratulations!🎉 You won a promocode on a 60% OFF.{" "}
              <code>#ILOVEGOIT2025</code>{" "}
            </h2>
          )}
          <label className={styles.label}>
            <span className={styles.textLabel}>Name:</span>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.textLabel}>Phone:</span>
            <Field
              className={styles.input}
              type="text"
              name="phone"
              placeholder="+38xxxxxxxxxx"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="phone"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.textLabel}>Email:</span>
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <div className={styles.statusWrap}>
            <h3 className={styles.textLabel}>Status:</h3>
            <label className={styles.radioLabel}>
              <span className={styles.textLabel}>Online:</span>
              <Field type="radio" name="status" value="online" />
            </label>
            <label className={styles.radioLabel}>
              <span className={styles.textLabel}>Offline:</span>
              <Field type="radio" name="status" value="offline" />
            </label>
            <ErrorMessage
              className={styles.errorMessage}
              name="status"
              component="span"
            />
          </div>

          <label className={styles.checkboxLabel}>
            <Field type="checkbox" name="hasPhysicalAddress" />
            <span className={styles.textCheckbox}>
              &nbsp;Has user physical address?
            </span>
          </label>

          <button className={styles.btn} type="submit">
            🤷‍♂️ Add Profile
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddProfile;
