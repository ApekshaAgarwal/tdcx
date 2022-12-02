import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import { Toast } from './components/Toast';
import { Pages } from './route';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Toast />
            <Pages />
          </PersistGate>
        </Provider>
      </BrowserRouter>

    </div >
  );
}

export default App;
