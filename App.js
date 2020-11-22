import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import RootNavigator from './navigation/RootNavigator';
import AlertModal from './components/UI/AlertModal';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
