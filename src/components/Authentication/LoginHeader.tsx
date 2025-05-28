import React from 'react';
import { cn } from '@/lib/utils';

interface LoginHeaderProps {
  className?: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ className }) => {
  return (
    <h2 className={cn(
      "text-3xl font-bold text-card-foreground", // "Log in" heading, bold, using card's foreground color
      className
    )}>
      Log in
    </h2>
  );
};

export default LoginHeader;
