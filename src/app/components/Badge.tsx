import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
} 