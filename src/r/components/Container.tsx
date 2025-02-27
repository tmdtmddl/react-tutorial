import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
interface Child {
  children?: React.PropsWithChildren;
}
const cn = "flex flex-col gap-y-1";

const Contanier = (props: Props) => {
  <div {...props} className={twMerge(cn, props?.className)} />;
};

export default Contanier;
