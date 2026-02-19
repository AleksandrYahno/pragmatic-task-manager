import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { headerRootStyle, headerTitleStyle } from './header.styles';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header style={headerRootStyle}>
      <h1 style={headerTitleStyle}>
        {t('common:app_title')}
      </h1>
    </header>
  );
};

export default Header;
