import { ChangeEvent, useReducer } from "react";
import styles from "./styles.module.css";
import { formReducer, InputType, FormState } from "../../hooks/formHooks";

export default function Form() {
  const initialState: FormState = {
    first: {
      value: "",
      valid: false,
      message: "",
    },
    last: {
      value: "",
      valid: false,
      message: "",
    },
    email: {
      value: "",
      valid: false,
      message: "",
    },
    password: {
      value: "",
      valid: false,
      message: "",
    },
  };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  function inputChange(
    event: ChangeEvent<HTMLInputElement>,
    inputType: InputType
  ) {
    dispatch({ type: inputType, payload: event.target.value });
  }

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="First Name"
          className={
            !formState.first.valid && formState.first.message !== ""
              ? styles.invalid + " " + styles.input
              : styles.input
          }
          onChange={(event) => inputChange(event, InputType.FIRST)}
          value={formState.first.value}
        />
        <span className={formState.first.valid ? styles.invisible : styles.error}>{formState.first.message}</span>
      </div>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Last Name"
          className={
            !formState.last.valid && formState.last.message !== ""
              ? styles.invalid + " " + styles.input
              : styles.input
          }
          onChange={(event) => inputChange(event, InputType.LAST)}
          value={formState.last.value}
        />
        <span className={formState.last.valid ? styles.invisible : styles.error}>{formState.last.message}</span>
      </div>
      <div className={styles.wrapper}>
        <input
          type="email"
          placeholder="Email Address"
          className={
            !formState.email.valid && formState.email.message !== ""
              ? styles.invalid + " " + styles.input
              : styles.input
          }
          onChange={(event) => inputChange(event, InputType.EMAIL)}
          value={formState.email.value}
        />
        <span className={formState.email.valid ? styles.invisible : styles.error}>{formState.email.message}</span>
      </div>
      <div className={styles.wrapper}>
        <input
          type="password"
          placeholder="Password"
          className={
            !formState.password.valid && formState.password.message !== ""
              ? styles.invalid + " " + styles.input
              : styles.input
          }
          onChange={(event) => inputChange(event, InputType.PASSWORD)}
          value={formState.password.value}
        />
        <span className={formState.password.valid ? styles.invisible : styles.error}>{formState.password.message}</span>
      </div>
      <button className={styles.button}>CLAIM YOUR FREE TRIAL</button>
      <p className={styles.terms}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className={styles.anchor}>
          Terms and Services
        </a>
      </p>
    </form>
  );
}
