import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RootContainer from './navigators/RootContainer';
import {store} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootContainer />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
