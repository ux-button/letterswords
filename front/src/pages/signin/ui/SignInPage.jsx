import { useState } from 'react';

import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { SignInBackground } from './SignInBackground';
import { StarwordyLogo } from '../../../shared/ui/StarwordyLogo';

const SignInPage = () => {
  // Control over inputs
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-mono-100 relative flex min-h-screen flex-col overflow-hidden px-8 pt-16 pb-28">
      <SignInBackground />
      <section className="flex shrink-0 justify-center">
        <StarwordyLogo />
      </section>
      <section className="z-20 flex flex-grow flex-col justify-center space-y-4">
        <div className="text-section text-mono-8 flex justify-center text-center">
          Start your
          <br />
          learnig journey
        </div>
        <div className="space-y-1">
          <Input text={login} setText={setLogin} type="onDark" label="Login" placeholder="Email" />
          <Input
            text={password}
            setText={setPassword}
            type="onDark"
            label="Password"
            placeholder="Password"
          />
        </div>
        <div className="flex">
          <Button size="large" type="tertary" icon="lock" width="full">
            Log In
          </Button>
          <Button size="large" type="primary" width="full">
            Sign Up
          </Button>
        </div>
      </section>
    </div>
  );
};

export { SignInPage };
