const SadeedehLogo = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Wisdom Diamond - representing "wise, sound, correct" */}
    <path d="M16 2L22 8L16 14L10 8L16 2Z" fill="currentColor" fillOpacity="0.9"/>
    {/* Surfing Waves - beach element */}
    <path d="M4 18C6 16 8 16 10 18C12 20 14 20 16 18C18 16 20 16 22 18C24 20 26 20 28 18" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M4 24C6 22 8 22 10 24C12 26 14 26 16 24C18 22 20 22 22 24C24 26 26 26 28 24" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Surfboard silhouette */}
    <ellipse cx="16" cy="28" rx="8" ry="2" fill="currentColor" fillOpacity="0.6"/>
  </svg>
);

export default SadeedehLogo;