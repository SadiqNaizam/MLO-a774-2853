import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  className,
  id = 'password', // Default ID, can be overridden
}) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Label is sr-only as placeholder serves as visual label, but important for accessibility */}
      <Label htmlFor={id} className="sr-only">
        Password
      </Label>
      <Input
        type="password"
        id={id}
        placeholder="Password"
        value={value}
        onChange={onChange}
        // Ensuring input matches card background and uses card text color
        // border-input is default from Shadcn and uses --input CSS var (light gray border)
        // placeholder:text-muted-foreground is also default from Shadcn
        className="w-full bg-card text-card-foreground"
        autoComplete="current-password"
      />
    </div>
  );
};

export default PasswordInput;
