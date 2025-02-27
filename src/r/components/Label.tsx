import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
const Label = (props: Props) => {
  return <label {...props} className={twMerge(cn, props?.className)} />;
};

export default Label;

const cn = "text-xs";
