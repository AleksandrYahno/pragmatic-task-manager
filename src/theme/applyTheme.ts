import { IAppPalette } from '@theme/appPalette.interface';
import { appPalette } from '@theme/appPalette';

const PALETTE_PREFIX = '--app';

export const applyTheme = (): void => {
  const root = document.documentElement;
  (Object.entries(appPalette) as [keyof IAppPalette, string][]).forEach(([key, value]) => {
    const cssVar = `${PALETTE_PREFIX}-${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`;
    root.style.setProperty(cssVar, value);
  });
};
