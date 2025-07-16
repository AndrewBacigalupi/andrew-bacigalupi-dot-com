import Image from 'next/image';
import { Badge } from './Badge';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  href?: string;
  badges?: string[];
  period: string;
  description?: string[] | string;
}

export function ResumeCard({ logoUrl, altText, title, subtitle, href, badges, period, description }: ResumeCardProps) {
  return (
    <div className="flex items-center gap-4 py-3 border-b last:border-b-0">
      <div className="flex-shrink-0">
        <div className="rounded-full bg-white border w-12 h-12 flex items-center justify-center overflow-hidden">
          <Image src={logoUrl} alt={altText} width={40} height={40} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-base">
          {href ? <a href={href} className="hover:underline" target="_blank" rel="noopener noreferrer">{title}</a> : title}
        </div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
        {badges && (
          <div className="flex flex-wrap gap-1 mt-1">
            {badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}
          </div>
        )}
        {description && (
          <ul className="mt-1 text-xs text-muted-foreground list-disc list-inside">
            {(Array.isArray(description) ? description : [description]).map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
      </div>
      <div className="text-xs text-muted-foreground text-right min-w-[90px]">{period}</div>
    </div>
  );
} 