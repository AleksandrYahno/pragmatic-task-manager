import { FC, PropsWithChildren, useLayoutEffect } from 'react';

import { applyTheme } from '@theme/applyTheme';

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  useLayoutEffect(() => {
    applyTheme();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export {
  ThemeProvider,
};
