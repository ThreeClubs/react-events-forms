import "./App.css";
import Form from "./components/Form";
import ConditionalRendering from "./components/ConditionalRendering";
import Animals from "./components/Animals";

export default function App() {
  return (
    <div className="App">
      <Form></Form>
      <ConditionalRendering></ConditionalRendering>
      <Animals></Animals>
    </div>
  );
}
