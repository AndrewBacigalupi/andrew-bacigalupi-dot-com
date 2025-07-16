import { FC, ReactElement } from 'react';

interface IconProps {
  name: 'tufts' | 'highland' | 'securian' | 'jumbo' | 'lanver';
  size?: number;
  alt?: string;
}

const icons: Record<string, ReactElement> = {
  tufts: (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" aria-label="Tufts University">
      <circle cx="16" cy="16" r="16" fill="#377BB5" />
      <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">T</text>
    </svg>
  ),
  highland: (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" aria-label="Highland Park">
      <circle cx="16" cy="16" r="16" fill="#4CAF50" />
      <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">H</text>
    </svg>
  ),
  securian: (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" aria-label="Securian Financial">
      <circle cx="16" cy="16" r="16" fill="#6CBB3C" />
      <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">S</text>
    </svg>
  ),
  jumbo: (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" aria-label="JumboCode">
      <circle cx="16" cy="16" r="16" fill="#E57373" />
      <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">J</text>
    </svg>
  ),
  lanver: (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" aria-label="Lanver Education">
      <circle cx="16" cy="16" r="16" fill="#FFD600" />
      <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#222" fontFamily="sans-serif">L</text>
    </svg>
  ),
};

const Icon: FC<IconProps> = ({ name, size = 22, alt }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', width: size, height: size }} aria-label={alt}>
    {icons[name]}
  </span>
);

export default Icon; 