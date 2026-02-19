import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IHeaderProps } from './header.interface';
import { headerRootStyle, headerTitleStyle } from './header.styles';

const Header: FC<IHeaderProps> = (props) => {
  const { style = {} } = props;
  const { t } = useTranslation();

  return (
    <header style={{ ...headerRootStyle, ...style }}>
      <h1 style={headerTitleStyle}>
        {t('common:app_title')}
      </h1>
    </header>
  );
};

export default Header;
