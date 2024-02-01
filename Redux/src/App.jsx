import "./styles.css";
import Counter from "./components/Count";
import { useDispatch } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
