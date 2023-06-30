import { useState } from "react";
import { Input } from "./components/Input/Input";
import "./style.css";

export const App = () => {
  const [email, setEmail] = useState("");

  function isValidEmail(value) {
    return value.includes("@");
  }

  return (
    <div className="container">
      <h1>Reusable Component</h1>
      <form>
        <Input
          onChange={setEmail}
          placeholder="johndoe@email.com"
          label="Email"
          value={email}
          id="input-email"
          type="email"
          required
          invalid={email.length ? !isValidEmail(email) : false}
        />
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};
