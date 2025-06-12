import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";
import { LoginBackground } from "./features/LoginBackground";
import { StarwordyLogo } from "./assets/StarwordyLogo";

const LogIn = () => {
  // Control over inputs
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("sdfdsf");

  return (
    <div className="relative flex flex-col bg-mono-100 overflow-hidden min-h-screen px-8 pt-16 pb-28">
      <LoginBackground />
      <section className="flex justify-center shrink-0">
        <StarwordyLogo />
      </section>
      <section className="flex flex-col space-y-4 flex-grow justify-center z-20">
        <div className="text-section text-mono-8 flex justify-center text-center">
          Start your
          <br />
          learnig journey
        </div>
        <div className="space-y-1">
          <Input
            text={login}
            setText={setLogin}
            type="onDark"
            title="Login"
            placeholder="Email"
          />
          <Input
            text={password}
            setText={setPassword}
            type="onDark"
            title="Password"
            placeholder="Password"
          />
        </div>
        <div className="flex">
          <Button size="large" type="tertary" icon="lock">
            Log In
          </Button>
          <Button size="large" type="primary">
            Sign Up
          </Button>
        </div>
      </section>
    </div>
  );
};

export { LogIn };
