import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        // Per Layout Requirements: overall.definition
        // "flex items-center justify-center h-screen bg-background"
        "flex items-center justify-center h-screen bg-background",
        className // Allows additional classes to be passed to the outermost container
      )}
    >
      {/* 
        Per Layout Requirements: mainContent.layout
        "flex flex-col items-center bg-surface rounded-lg shadow-lg p-8"
        This <main> element acts as the card container.
        - bg-surface is equivalent to var(--card) background.
        - text-card-foreground ensures text inside the card uses appropriate color.
        - w-full max-w-md is added to constrain the card's width, suitable for a login form.
          The LoginForm and its child components use w-full, relying on a parent for width constraint.
      */}
      <main
        className={cn(
          "flex flex-col items-center bg-surface text-card-foreground rounded-lg shadow-lg p-8",
          "w-full max-w-md"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
