import { keyframes, style } from "@vanilla-extract/css";
const fromTop = keyframes({
  "0%": {
    transform: "translateY(-50%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});
const styles = style({ border: "1px solid" });

export default styles;
