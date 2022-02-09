import "./styles.css";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.ToggleColor}>Toggle theme</button>
      <Content />
    </div>
  );
}
