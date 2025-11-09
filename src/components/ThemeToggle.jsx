import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const ThemeToggle = ({ className = '', iconSize = 20 }) => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('ThemeToggle button clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`rounded-full w-8 h-8 bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${className}`}
    >
      {theme === 'light' ? (
        <Moon size={iconSize} className="w-5 h-5" />
      ) : (
        <Sun size={iconSize} className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
