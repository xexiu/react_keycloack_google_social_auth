import { useState } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './utils/keycloack';
import UserService from "./services/UserService";
import './App.css';

function App() {
  const [token, setToken] = useState('');

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <div className="App">
        <header className="App-header">
          <div>
            <button className="btn btn-danger" onClick={UserService.doLogout}>Log out</button>
            <br />
            <button className="btn btn-danger" onClick={keycloak.accountManagement}>User Management</button>
            <br />
            <button className="btn btn-danger" onClick={() => setToken(UserService.getToken())}>Get Token</button>
          </div>
          <div>{token ? `Token: ${token}` : ''}</div>
          <div>
            <p>Keycloack:</p>
            <pre><code>{JSON.stringify(keycloak, null, 1)}</code></pre>
          </div>
        </header>
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
