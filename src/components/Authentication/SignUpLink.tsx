import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Using Shadcn Button for consistency

interface SignUpLinkProps {
  onSignUpClick: () => void; // Callback for when the link/button is clicked
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ onSignUpClick, className }) => {
  return (
    <div className={cn("text-sm text-center", className)}>
      <span className="text-muted-foreground">or, </span>
      <Button
        variant="link" // Uses primary color for text and underline on hover by default
        onClick={onSignUpClick}
        // p-0 h-auto adjust padding and height to make it look more like inline text
        // font-medium gives it slight emphasis
        className="p-0 h-auto text-sm font-medium"
      >
        sign up
      </Button>
    </div>
  );
};

export default SignUpLink;
