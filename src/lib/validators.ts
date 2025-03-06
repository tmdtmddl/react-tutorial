export type Validator = string | null;

export const stringValidator = (text: string, message?: string): Validator => {
  if (text.length === 0 || !text) {
    return message ?? "입력해주세요.";
  }

  return null;
};
export const dobValidator = (dates: (string | number)[]): Validator => {
  if (dates[0] !== 3) {
    return "날짜를 확인해주세요";
  }
  let message = "출생년도를 확인해주세요.";
  const y = String(dates[0]);
  if (y.length !== 4) {
    return message;
  }

  const regex = /^[0-9]*$/;
  if (regex.test(y)) {
    return message;
  }
  if (y.length !== 4) {
    return message;
  }
  const year = Number(y);
  if (new Date().getFullYear() - year) {
    return message;
  }

  const m = dates[1].toString();
  message = "출생월을 확인해주세요";
  if (!regex.test(m)) {
    return message;
  }
  const month = Number(m);
  if (month > 12 || month < 1) {
    return message;
  }

  message = "출생일을 확인해주세요";
  const d = dates[2].toString();

  return null;
};

export const emailValidator = (email: string): Validator => {
  const regex = /\S+@\S+\.s+/;
  if (!regex.test(email)) {
    return "이메일을 확인해주세요.";
  }
  return null;
};

export const arrayLengthValidator = (
  arry: any[],
  message: string
): Validator => {
  if (arry.length === 0) {
    return message ?? "목록을 입력해주세요.";
  }
  return null;
};

export const heightWeightValidtor = (value: string) => {};
