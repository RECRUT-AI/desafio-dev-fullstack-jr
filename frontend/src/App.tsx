import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

export function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <p>hello world!</p>
        </PersistGate>
      </Provider>
    </div>
  );
}
