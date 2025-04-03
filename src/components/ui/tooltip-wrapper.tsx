
import React from 'react';
import { TooltipProvider } from './tooltip';

interface TooltipWrapperProps {
  children: React.ReactNode;
}

export function TooltipWrapper({ children }: TooltipWrapperProps) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  );
}
