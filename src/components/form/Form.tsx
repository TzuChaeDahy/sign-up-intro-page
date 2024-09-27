import { ChangeEvent, useReducer, useState } from "react";
import { formReducer, FormState, InputType } from "../../hooks/formHooks";
import styles from "./styles.module.css";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function Form() {
  const initialState: FormState = {
    canSendData: false,
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
  const [isDataSave, setIsDataSave] = useState(
    sessionStorage.getItem("user_data") !== null
  );

  function inputChange(
    event: ChangeEvent<HTMLInputElement>,
    inputType: InputType
  ) {
    dispatch({ type: inputType, payload: event.target.value });
  }

  function handleFormSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const userData: UserData = {
      first_name: formState.first.value,
      last_name: formState.last.value,
      email: formState.email.value,
      password: formState.password.value,
    };

    sessionStorage.setItem("user_data", JSON.stringify(userData));

    setIsDataSave(true);
  }

  const formContainer = (
    <form className={styles.container}>
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
        <span
          className={formState.first.valid ? styles.invisible : styles.error}
        >
          {formState.first.message}
        </span>
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
        <span
          className={formState.last.valid ? styles.invisible : styles.error}
        >
          {formState.last.message}
        </span>
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
        <span
          className={formState.email.valid ? styles.invisible : styles.error}
        >
          {formState.email.message}
        </span>
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
        <span
          className={formState.password.valid ? styles.invisible : styles.error}
        >
          {formState.password.message}
        </span>
      </div>
      <button
        className={
          formState.canSendData
            ? styles.button
            : styles.button + " " + styles.button_disabled
        }
        onClick={(event) => handleFormSubmit(event)}
        disabled={!formState.canSendData}
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className={styles.terms}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className={styles.anchor}>
          Terms and Services
        </a>
      </p>
    </form>
  );

  const submittedContainer = (
    <div className={styles.container}>
      <img src="/icon-done.svg" alt="done icon" className={styles.done_icon} />
      <h2 className={styles.title}>Thanks for your trust!</h2>
      <p className={styles.subtitle}>
        Keep up to our new projects and courses in your email!
      </p>
    </div>
  );

  return !isDataSave ? formContainer : submittedContainer;
}
