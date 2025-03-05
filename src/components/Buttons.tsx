import { twMerge } from "tailwind-merge";
import { Link as L } from "react-router-dom";
type ButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const sharedButtonStyle = "flex justify-center items-center h-10 rounded ";
export const Opacity = (props: ButtonType) => (
  <button
    {...props}
    className={twMerge(sharedButtonStyle, "hover:opacity-80", props?.className)}
  />
);

export const Pressable = () => {};

type LinkType = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>;
export const Link = (props: LinkType) => <L to={props?.href as any} />;
