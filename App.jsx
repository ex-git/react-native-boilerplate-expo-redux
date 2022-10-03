import React, { useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
// import { enableScreens } from 'react-native-screens';
// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import { useFonts } from 'expo-font';
// import { AntDesign } from '@expo/vector-icons';
import Router from './src/components/core/Router';
import { store, persistor } from './src/redux/store';
// import ProximaNova from './assets/fonts/Proxima-Nova .ttf';
import { i18n, LocalizationContext } from './src/utils';
// Before rendering any navigation stack
// no longer needed to add this
// enableScreens();

const App = ({ props }) => {
  const [locale, setLocale] = useState(i18n.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );

  // if loading asset or font before rendering is needed, enable below
  // const [assets] = useAssets([require('path/to/asset.jpg'), require('path/to/other.png')]);
  // const [fontsLoaded] = useFonts({
  //   ...AntDesign.font,
  //   'space-mono': ProximaNova,
  // });

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading
  //       onError={handleLoadingError}
  //     />
  //   );
  // }

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
