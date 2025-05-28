import React from 'react';
import { cn } from '@/lib/utils';
import LoginHeader from './LoginHeader';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import SignUpLink from './SignUpLink';

interface LoginFormProps {
  className?: string;
  // onLoginSubmit?: (data: { username: string; password; string }) => void; // Example for actual submission logic
}

const LoginForm: React.FC<LoginFormProps> = ({ className /*, onLoginSubmit */ }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleUsernameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Login attempt with:', { username, password });
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Example: if (onLoginSubmit) onLoginSubmit({ username, password });
      // Reset form or show success/error message here
    }, 1500);
  }, [username, password /*, onLoginSubmit */]);

  const handleSignUpClick = React.useCallback(() => {
    console.log('Sign up link clicked');
    // Logic for sign up navigation or action
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col items-center gap-4 w-full", // Conforms to layout requirements: container with gap-4 and centered items
        className
      )}
    >
      <LoginHeader />
      <UsernameInput
        id="login-username" // Unique ID for label association
        value={username}
        onChange={handleUsernameChange}
      />
      <PasswordInput
        id="login-password" // Unique ID for label association
        value={password}
        onChange={handlePasswordChange}
      />
      <LoginButton disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log in'}
      </LoginButton>
      <SignUpLink onSignUpClick={handleSignUpClick} />
    </form>
  );
};

export default LoginForm;
