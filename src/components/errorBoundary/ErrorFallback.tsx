import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  errorFallbackButtonStyle,
  errorFallbackMessageStyle,
  errorFallbackRootStyle,
} from './errorBoundary.styles';

const ErrorFallback: FC = () => {
  const { t } = useTranslation();

  const handleReload = (): void => {
    window.location.reload();
  };

  return (
    <div style={errorFallbackRootStyle}>
      <p style={errorFallbackMessageStyle}>
        {t('common:error_something_went_wrong')}
      </p>

      <button
        type="button"
        onClick={handleReload}
        style={errorFallbackButtonStyle}
      >
        {t('common:error_reload')}
      </button>
    </div>
  );
};

export default ErrorFallback;
