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
  first: {
    value: string;
    valid: boolean;
  };
  last: {
    value: string;
    valid: boolean;
  };
  email: {
    value: string;
    valid: boolean;
  };
  password: {
    value: string;
    valid: boolean;
  };
}

export function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case InputType.FIRST:
      return {
        ...state,
        first: {
          value: action.payload,
          valid: doesItFitRegex(nameRegex, action.payload),
        },
      };

    case InputType.LAST:
      return {
        ...state,
        last: {
          value: action.payload,
          valid: doesItFitRegex(nameRegex, action.payload),
        },
      };

    case InputType.EMAIL:
      return {
        ...state,
        email: {
          value: action.payload,
          valid: doesItFitRegex(emailRegex, action.payload),
        },
      };

    case InputType.PASSWORD:
      return {
        ...state,
        password: {
          value: action.payload,
          valid: doesItFitRegex(passwordRegex, action.payload),
        },
      };
  }
}
