import React from 'react';

export interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
