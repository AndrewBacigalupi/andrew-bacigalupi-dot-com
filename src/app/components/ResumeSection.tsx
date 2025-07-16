import { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  id?: string;
  children: ReactNode;
}

export default function ResumeSection({ title, id, children }: ResumeSectionProps) {
  return (
    <section id={id}>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 1.5rem 0' }}>
        <svg width="60" height="4" viewBox="0 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="1" width="60" height="2" rx="1" fill="var(--accent)" />
        </svg>
      </div>
      {children}
    </section>
  );
} 