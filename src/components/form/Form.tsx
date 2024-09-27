import { ChangeEvent, useReducer } from "react";
import styles from "./styles.module.css";
import { formReducer, InputType, FormState } from "../../hooks/formHooks";

export default function Form() {
  const initialState: FormState = {
    first: {
      value: "",
      valid: false,
    },
    last: {
      value: "",
      valid: false,
    },
    email: {
      value: "",
      valid: false,
    },
    password: {
      value: "",
      valid: false,
    },
  };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  function firstNameChange(
    event: ChangeEvent<HTMLInputElement>,
    inputType: InputType
  ) {
    dispatch({ type: inputType, payload: event.target.value });
  }

  console.log(formState);

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="First Name"
        className={
          !formState.first.valid
            ? styles.invalid + " " + styles.input
            : styles.input
        }
        onChange={(event) => firstNameChange(event, InputType.FIRST)}
        value={formState.first.value}
      />
      <input
        type="text"
        placeholder="Last Name"
        className={
          !formState.last.valid
            ? styles.invalid + " " + styles.input
            : styles.input
        }
        onChange={(event) => firstNameChange(event, InputType.LAST)}
        value={formState.last.value}
      />
      <input
        type="email"
        placeholder="Email Address"
        className={
          !formState.email.valid
            ? styles.invalid + " " + styles.input
            : styles.input
        }
        onChange={(event) => firstNameChange(event, InputType.EMAIL)}
        value={formState.email.value}
      />
      <input
        type="password"
        placeholder="Password"
        className={
          !formState.password.valid
            ? styles.invalid + " " + styles.input
            : styles.input
        }
        onChange={(event) => firstNameChange(event, InputType.PASSWORD)}
        value={formState.password.value}
      />
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
