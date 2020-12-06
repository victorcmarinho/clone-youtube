import React from 'react';

import Bootstrap from './Bootstrap';
import { MyThemeProvider } from './hooks/ThemeContext';

const App: React.FC = () => {
  return (
    <MyThemeProvider>
      <Bootstrap />
    </MyThemeProvider>
  );
};

export default App;
