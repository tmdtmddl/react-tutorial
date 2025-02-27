import { twMerge } from "tailwind-merge";

interface Props {
  container?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  label?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  id: string;
  title: string;
  placeholder: string;
  value: string | number;
  onChangeText: (value: string) => void;
  ref?: React.Ref<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
}

const TextInput = ({
  container,
  input,
  label,
  id,
  title,
  placeholder,
  value,
  onChangeText,
  ref,
  type,
}: Props) => {
  return (
    <div {...container} className={twMerge(d, container?.className)}>
      <label {...label} htmlFor={id} className={twMerge(l, label?.className)}>
        {title}
      </label>
      <input
        {...input}
        type={type ?? "text"}
        id={id}
        ref={ref}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        className={twMerge(i, input?.className)}
        placeholder={input?.placeholder ?? placeholder}
      />
    </div>
  );
};

//! ?? 앞의값이 없으면 물음표뒤의 값을 안전빵으로 씀
export default TextInput;

const d = "flex flex-col gap-y-1";
const l = "text-xs text-gray-500";
const i =
  "rounded outline-none bg-gray-100 focus:bg-gray-50 focus:border focus:border-blue-500 h-10 px-2.5";
