import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Auth0Provider
    domain="dev-1r7xus2sh1lq18br.us.auth0.com"
    clientId="krCpeCXwkSqtEBiEaSV3fnC80n25dxHr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,);
