import { StaticImageData } from 'next/image';
import React from 'react';

export interface ThemeInterface {
  logo: StaticImageData
  theme: string;
  toggleTheme: () => void;
}
