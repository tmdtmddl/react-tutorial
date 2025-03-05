import { twMerge } from "tailwind-merge";

type FormType = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;
export const Container = (props: FormType) => {
  return (
    <form
      {...props}
      className={twMerge("flex flex-col gap-y-2.5 ", props?.className)}
    />
  );
};

type LabelType = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export const Label = (props: LabelType) => {
  return (
    <label htmlFor="" {...props} className={twMerge("text-gray-500 text-xs")} />
  );
};

type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const Input = (props: InputType) => (
  <input {...props} className="px-2.5" />
);

type SelectType = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
export const Select = (props: SelectType) => <select />;
