import { FC, ReactElement, useMemo } from 'react';
import { SnackbarProvider } from 'notistack';

import { buildProvidersTree } from '@helpers/providerBuilder.helper';
import { AppMainProvider } from '@providers/appMainProvider/AppMainProvider';
import { ThemeProvider } from '@providers/themeProvider/ThemeProvider';

const snackbarProviderConfig = {
  maxSnack: 3,
  anchorOrigin: {
    vertical: 'bottom' as const,
    horizontal: 'right' as const,
  },
};

const App: FC = (): ReactElement => {
  const GlobalProviders = useMemo(() => {
    return buildProvidersTree([
      [ThemeProvider],
      [SnackbarProvider, { ...snackbarProviderConfig }],
      [AppMainProvider],
    ]);
  }, []);

  return (
    <GlobalProviders>
      show this message if something went wrong with react router inside AppMainProvider
    </GlobalProviders>
  );
};

export default App;
