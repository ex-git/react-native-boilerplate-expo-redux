import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import Navigator from './src/components/core/Navigator';
import { store, persistor } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ActionSheetProvider>
        <Navigator />
      </ActionSheetProvider>
    </PersistGate>
  </Provider>
);

export default App;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import HomeScreen from './src/screens/home';
// import { function1 } from './src/redux/actions';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text onClick={function1()}>Testing</Text>
//     </View>
//   );
// }
