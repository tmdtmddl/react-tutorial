import { twMerge } from "tailwind-merge";

interface Props {
  contanier?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  label?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  select?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  ref?: React.Ref<HTMLSelectElement>;
  id: string;
  title: string;
  placeholder: string;
  value: string;
  onSelectOption: (value: string) => void;
  options: string[];
}

const Select = ({
  id,
  onSelectOption,
  options,
  placeholder,
  title,
  value,
  contanier,
  label,
  ref,
  select,
}: Props) => {
  return (
    <div {...contanier} className={twMerge(d, contanier?.className)}>
      <label {...label} htmlFor={id} className={twMerge(l, label?.className)}>
        {title}
      </label>
      <select
        ref={ref}
        id="status"
        value={value}
        className={twMerge(s, select?.className)}
        onChange={(e) => {
          onSelectOption(e.target.value);
        }}
      >
        <option>{placeholder ?? "선택"}</option>

        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

const d = "flex flex-col gap-y-1";
const l = "text-xs text-gray-500";
const i =
  "rounded outline-none bg-gray-100 focus:bg-gray-50 focus:border focus:border-blue-500 h-10 px-2.5";
const s = twMerge(input, " pl-0");
