import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive') || target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
        document.body.classList.add('hovering');
      } else {
        document.body.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('hovering');
    };
  }, []);

  return (
    <div
      className="football-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" height="28" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
        className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7.5L8.5 10l1.5 4.5h4L15.5 10z" fill="currentColor" />
        <path d="M12 7.5V2" />
        <path d="M8.5 10L3.5 8" />
        <path d="M15.5 10L20.5 8" />
        <path d="M10 14.5L7 20" />
        <path d="M14 14.5L17 20" />
      </svg>
    </div>
  );
}
