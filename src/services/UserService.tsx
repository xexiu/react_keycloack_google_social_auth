import keycloak from '../utils/keycloack';

const initKeycloak = (onAuthenticatedCallback: Function) => {
    keycloak.init({
        onLoad: 'login-required'
    })
    .then((authenticated: any) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      return onAuthenticatedCallback();
    })
    .catch(() => {
      console.log('Please start keyCloack app by running: npm run docker-run');
      console.log('Error: ', console.error);

      return console.error;
    });
};

const getKeyCloack = () => keycloak;

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => !!keycloak.token;

const updateToken = (successCallback: Function) =>
    keycloak.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) => roles.some((role: string) => keycloak.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getKeyCloack
};

export default UserService;