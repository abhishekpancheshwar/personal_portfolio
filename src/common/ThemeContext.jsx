import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      console.log('ThemeProvider rendered');
      return localStorage.getItem('theme') || 'light';
    } catch (error) {
      console.error("Error reading theme from localStorage:", error);
      return 'light';
    }
  });

  const textColor = theme === 'light' ? '#000000' : '#FFFFFF'; // Set text color dynamically

  useEffect(() => {
    try {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error("Error setting theme in localStorage or updating the DOM:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
