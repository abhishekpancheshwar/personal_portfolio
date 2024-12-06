
import { useTheme } from './common/ThemeContext.jsx';

const TestTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default TestTheme;
