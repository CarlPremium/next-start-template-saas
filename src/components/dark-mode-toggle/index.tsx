import { useEffect, useState } from 'react';
import { tw } from 'twind';

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`theme`);
    if (stored === `dark`) {
      document.documentElement.classList.add(`dark`);
      setEnabled(true);
    }
  }, []);

  const toggle = () => {
    if (enabled) {
      document.documentElement.classList.remove(`dark`);
      localStorage.setItem(`theme`, `light`);
      setEnabled(false);
    } else {
      document.documentElement.classList.add(`dark`);
      localStorage.setItem(`theme`, `dark`);
      setEnabled(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={tw(`p-2 text-gray-600 dark:text-gray-300`)}
    >
      {enabled ? `Light` : `Dark`}
    </button>
  );
}
