import {
  doesItFitRegex,
  nameRegex,
  emailRegex,
  passwordRegex,
} from "../utils/validations";

export enum InputType {
  FIRST,
  LAST,
  EMAIL,
  PASSWORD,
}

interface FormAction {
  type: InputType;
  payload: string;
}

export interface FormState {
  canSendData: boolean;
  first: {
    value: string;
    valid: boolean;
    message: string;
  };
  last: {
    value: string;
    valid: boolean;
    message: string;
  };
  email: {
    value: string;
    valid: boolean;
    message: string;
  };
  password: {
    value: string;
    valid: boolean;
    message: string;
  };
}

export function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case InputType.FIRST: {
      const fitRegex = doesItFitRegex(nameRegex, action.payload);

      return {
        ...state,
        first: {
          value: action.payload,
          valid: fitRegex,
          message: fitRegex
            ? ""
            : "First name cannot be empty and must have length greater than 2 characters",
        },
        canSendData:
          fitRegex &&
          state.last.valid &&
          state.email.valid &&
          state.password.valid,
      };
    }

    case InputType.LAST: {
      const fitRegex = doesItFitRegex(nameRegex, action.payload);

      return {
        ...state,
        last: {
          value: action.payload,
          valid: fitRegex,
          message: fitRegex
            ? ""
            : "Last name cannot be empty and must have length greater than 2 characters",
        },
        canSendData:
          state.first.valid &&
          fitRegex &&
          state.email.valid &&
          state.password.valid,
      };
    }

    case InputType.EMAIL: {
      const fitRegex = doesItFitRegex(emailRegex, action.payload);

      return {
        ...state,
        email: {
          value: action.payload,
          valid: fitRegex,
          message: fitRegex ? "" : "Email must follow a valid pattern",
        },
        canSendData:
          state.first.valid &&
          state.last.valid &&
          fitRegex &&
          state.password.valid,
      };
    }

    case InputType.PASSWORD: {
      const fitRegex = doesItFitRegex(passwordRegex, action.payload);

      return {
        ...state,
        password: {
          value: action.payload,
          valid: fitRegex,
          message: fitRegex
            ? ""
            : "Password must have at least 7 normal characters and 1 special",
        },
        canSendData:
          state.first.valid &&
          state.last.valid &&
          state.email.valid &&
          fitRegex
      };
    }
  }
}
