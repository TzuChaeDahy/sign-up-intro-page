export const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{3,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

export function doesItFitRegex(regex: RegExp, text: string) {
  return regex.test(text);
}
