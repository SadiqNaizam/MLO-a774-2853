import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LoginButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional if type="submit" and handled by form onSubmit
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  disabled = false,
  className,
  children = 'Log in',
}) => {
  return (
    <Button
      type="submit" // Ensures it can submit the parent form
      onClick={onClick} // Can also have a specific click handler
      disabled={disabled}
      // variant="default" uses primary colors from theme (teal bg, white text, teal hover)
      // w-full makes it take full width of its container
      className={cn("w-full", className)}
      variant="default" 
    >
      {children}
    </Button>
  );
};

export default LoginButton;
