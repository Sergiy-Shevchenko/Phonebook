import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider>
      <PersistGate> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
