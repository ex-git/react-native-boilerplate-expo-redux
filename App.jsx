import React, { useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { enableScreens } from 'react-native-screens';
import Router from './src/components/core/Router';
import { store, persistor } from './src/redux/store';
import { i18n, LocalizationContext } from './src/utils';
// Before rendering any navigation stack
enableScreens();

const App = () => {
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationContext.Provider value={localizationContext}>
          <ActionSheetProvider>
            <Router />
          </ActionSheetProvider>
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
