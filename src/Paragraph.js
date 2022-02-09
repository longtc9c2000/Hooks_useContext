import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <p className={context.theme}>Hello. i am is fuck boy. </p>
    </div>
  );
}
export default Paragraph;
