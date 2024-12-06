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
      // Attempt to retrieve theme from localStorage
      return localStorage.getItem('theme') || 'light';
    } catch (error) {
      // Log any error that occurs while accessing localStorage
      console.error("Error reading theme from localStorage:", error);
      return 'light';  // Fallback to 'light' theme if there's an error
    }
  });

  useEffect(() => {
    try {
      // Attempt to set the data-theme attribute on the body
      document.body.setAttribute('data-theme', theme);

      // Attempt to store the theme in localStorage
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Log any error that occurs while interacting with the DOM or localStorage
      console.error("Error setting theme in localStorage or updating the DOM:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Apply PropTypes to ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children are passed and should be a valid React node
};

export default ThemeContext;
