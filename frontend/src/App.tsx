import { Route, Routes, Navigate } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistStore } from 'redux-persist';
import { Home } from './pages/Home';

const persistor = persistStore(store);

export function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}
